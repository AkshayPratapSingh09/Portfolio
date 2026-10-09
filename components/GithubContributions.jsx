'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ActivityCalendar } from 'react-activity-calendar';
import { RotateCw, ExternalLink, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

// GitHub dark mode color scale
const GITHUB_THEME = {
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

const USERNAME = 'AkshayPratapSingh09';
const AVATAR_URL = 'https://avatars.githubusercontent.com/u/99736940?v=4';
const PROFILE_URL = `https://github.com/${USERNAME}`;

const GithubContributions = () => {
  const [contributions, setContributions] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [mounted, setMounted] = useState(false);

  const fetchContributions = useCallback(async (isManual = false) => {
    if (isManual) {
      setIsRefreshing(true);
    }
    try {
      // 1. Try our own Next.js API route first (supports live + server cache)
      const res = await fetch(`/api/github-contributions?t=${Date.now()}`, {
        cache: 'no-store',
      });
      if (res.ok) {
        const data = await res.json();
        if (data.contributions && Array.isArray(data.contributions)) {
          setContributions(data.contributions);
          setTotalCount(data.total?.lastYear || 0);
          setLastUpdated(new Date());
          if (typeof window !== 'undefined') {
            try {
              localStorage.setItem('cached_gh_contributions', JSON.stringify(data));
            } catch (_) {}
          }
          setLoading(false);
          setIsRefreshing(false);
          return;
        }
      }
    } catch (apiErr) {
      console.warn('API route failed, trying direct endpoint:', apiErr);
    }

    // 2. Direct fallback to external contributions API if route has issues
    try {
      const directRes = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`
      );
      if (directRes.ok) {
        const data = await directRes.json();
        if (data.contributions) {
          setContributions(data.contributions);
          setTotalCount(data.total?.lastYear || 0);
          setLastUpdated(new Date());
          setLoading(false);
          setIsRefreshing(false);
          return;
        }
      }
    } catch (directErr) {
      console.warn('Direct API failed, checking localStorage cache:', directErr);
    }

    // 3. Last fallback: localStorage or static backup file
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('cached_gh_contributions');
        if (stored) {
          const parsed = JSON.parse(stored);
          setContributions(parsed.contributions || []);
          setTotalCount(parsed.total?.lastYear || 0);
          setLoading(false);
          setIsRefreshing(false);
          return;
        }
      } catch (_) {}
    }

    try {
      const backupRes = await fetch('/github-contributions-cache.json');
      if (backupRes.ok) {
        const backupData = await backupRes.json();
        setContributions(backupData.contributions || []);
        setTotalCount(backupData.total?.lastYear || 0);
      }
    } catch (_) {}

    setLoading(false);
    setIsRefreshing(false);
  }, []);

  // Initial fetch and client mount setup
  useEffect(() => {
    setMounted(true);
    fetchContributions();

    // Auto-update every 10 minutes for live freshness
    const intervalId = setInterval(() => {
      fetchContributions();
    }, 10 * 60 * 1000);

    // Auto-update when user refocuses the tab
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchContributions();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [fetchContributions]);

  return (
    <section className="py-8 xl:py-14 w-full relative" id="github-contributions">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="section-title mb-2 text-center mx-auto pt-2">
            GitHub Activity
          </h2>
          <p className="text-muted-foreground text-sm max-w-[500px] text-center">
            Daily commits, open source contributions, and engineering milestones
          </p>
        </div>

        {/* GitHub Graph Card - Exactly matching the sleek dark design */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl md:rounded-3xl bg-[#0d1117] border border-[#30363d]/80 text-[#c9d1d9] p-5 sm:p-7 md:p-8 shadow-2xl shadow-black/50 transition-all hover:border-[#388bfd]/40">
            {/* Top Bar: Avatar + Username + Live Status & Refresh Button */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-2 border-b border-[#21262d]">
              {/* Profile info matching the image */}
              <a
                href={PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 focus:outline-none focus:ring-2 focus:ring-[#388bfd] rounded-lg p-1 -m-1 transition-transform"
                title="View GitHub Profile"
              >
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#30363d] group-hover:border-emerald-500 transition-colors shadow-md">
                  <Image
                    src={AVATAR_URL}
                    alt={USERNAME}
                    width={44}
                    height={44}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white text-base sm:text-lg tracking-tight group-hover:text-emerald-400 transition-colors">
                      {USERNAME}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <span className="text-xs text-zinc-400 hidden sm:inline-block">
                    github.com/{USERNAME}
                  </span>
                </div>
              </a>

              {/* Status and dynamic refresh controls */}
              <div className="flex items-center gap-2.5">
                {/* Live Activity indicator */}
                <div className="inline-flex items-center gap-2 bg-[#161b22] border border-[#30363d] px-3 py-1 rounded-full text-xs text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-medium hidden sm:inline">Live Activity</span>
                  <span className="font-medium sm:hidden">Live</span>
                </div>

                {/* Manual refresh button */}
                <button
                  onClick={() => fetchContributions(true)}
                  disabled={isRefreshing}
                  className="p-1.5 sm:p-2 rounded-lg bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] text-zinc-300 hover:text-white transition-all focus:outline-none disabled:opacity-50"
                  title="Refresh contributions now"
                  aria-label="Refresh contributions"
                >
                  <RotateCw
                    className={`w-4 h-4 text-zinc-400 hover:text-white ${
                      isRefreshing ? 'animate-spin text-emerald-400' : ''
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Calendar Visualization */}
            <div className="w-full overflow-x-auto pb-2 pt-1 flex justify-center text-[#c9d1d9] scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
              {!mounted || loading ? (
                /* Sleek Skeleton Loading state */
                <div className="w-full flex flex-col gap-3 py-4 animate-pulse">
                  <div className="h-4 bg-[#161b22] rounded w-48 mb-2"></div>
                  <div className="grid grid-flow-col gap-1 auto-cols-max overflow-hidden">
                    {Array.from({ length: 48 }).map((_, col) => (
                      <div key={col} className="flex flex-col gap-1">
                        {Array.from({ length: 7 }).map((_, row) => (
                          <div
                            key={row}
                            className="w-3 h-3 bg-[#161b22] rounded-[3px]"
                          ></div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-2">
                    <div className="h-3.5 bg-[#161b22] rounded w-40"></div>
                    <div className="h-3.5 bg-[#161b22] rounded w-32"></div>
                  </div>
                </div>
              ) : (
                <div className="min-w-max">
                  <ActivityCalendar
                    data={contributions}
                    colorScheme="dark"
                    theme={GITHUB_THEME}
                    blockSize={12}
                    blockMargin={4}
                    blockRadius={3}
                    fontSize={12}
                    showWeekdayLabels={['mon', 'wed', 'fri']}
                    labels={{
                      totalCount: `${totalCount.toLocaleString()} contributions in the last year`,
                      legend: {
                        less: 'Less',
                        more: 'More',
                      },
                    }}
                    renderBlock={(block, activity) =>
                      React.cloneElement(block, {
                        children: (
                          <title key="tooltip">{`${activity.count} contribution${
                            activity.count === 1 ? '' : 's'
                          } on ${activity.date}`}</title>
                        ),
                      })
                    }
                  />
                </div>
              )}
            </div>

            {/* Micro timestamp note */}
            {lastUpdated && (
              <div className="mt-2 text-right">
                <span className="text-[11px] text-zinc-500 font-mono">
                  Auto-updated {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubContributions;
