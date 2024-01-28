"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
const Form = () => {
  return (
    // Now using formspree here .. before i used getform.io  ( please dont copy my form action link.. it wont work for you)
    <form
      className="flex flex-col gap-y-4"
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      {/* input  */}
      <input type="hidden" name="access_key" value="db1deed2-56e4-4948-8a63-cbee0b614cbd" />
      <div className="relative flex items-center">
        <Input type="name" id="name" name="name" required placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input  */}
      <div className="relative flex items-center">
        <Input type="email" id="email" name="email" required placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* input  */}
      <div className="relative flex items-center">
        <Textarea
          id="message"
          name="message"
          placeholder="Type your message here."
          required
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
