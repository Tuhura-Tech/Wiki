---
title: Command Injection
description: Injecting commands (such as bash or python) into vulnerable websites
sidebar:
   order: 4
---

<!-- Overview of how it works -->

Some applications and sites pass data through the system shell of the computer on which they run, or, in the case of websites, the system shell of the server on which they are hosted. If this data comes from a user, whether directly (like inputs on a form) or indirectly (like cookies, or header data sent by their browser), it's possible that they could use this functionality to run commands directly on that shell. This is referred to as command injection. Command injection can be particularly dangerous when an application has elevated permissions -- a regular user running commands on a school computer might be blocked from deleting important files, but if an application is running with higher privileges, injecting commands through it could cause a lot more damage.

Command injection is not the same as code injection (which you may have also heard of under the name Remote Code Execution). Injecting or executing code is placing your own program on a vulnerable device; command injection runs commands through the shell of a vulnerable device's operating system. Both can have flashy and destructive results, and command injection can even lead to code injection, if the command you inject is one that allows you to download files onto the vulnerable device!

<!-- Examples using command injection -->

<!-- Bash examples -->

As an example, this is a small bash script to check if something is a valid format for an email address:

```Bash

#!/bin/bash
#######################################################################################
#  Author: Chris Karakannas, Jan 2021
#  Arguments:
#  1. A valid email address
#  Note: A single string argument is mandatory.
#  Usage: A simple script to check the format validity of a common email address (99% success rate)#######################################################################################
# Check arguments passed in equal to 1
PWD=`dirname $0`
if [[ $# -ne 1 ]] ; then
  echo "You must provide exactly 1 argument."
exit 1
fi
re="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$"
if [[ $1  =~ $re ]]; then
  echo "Email $1 is valid!"
  exit 0
fi
echo "Invalid email: ${1} - Try again"
exit 1
```

If you save this Bash script as email_validator.sh, it's easy enough to see the expected output.

Running `./email_validator.sh` gives the output:

`You must provide exactly 1 argument.`

Running `./email_validator.sh HELLO` gives the output:

`Invalid email: HELLO - Try again`

And finally, running `./email_validator.sh HELLO@website.com` gives the output:

`Email HELLO@website.com is valid!`

However, this simple script is vulnerable to command injection. You can use the semicolon (;) to separate bash commands on Unix systems. So, if you include a semicolon in your input for this script, you can get some unusual output...

Running `./email_validator.sh HELLO;echo "Command Injection!"` gives you this output:

```
Invalid email: HELLO - Try again
Command Injection!
```

It's easy enough to see what happened here. When it was done running the intended commands, this script simply moved on to running the `echo` command you provided. Simply watching out for and trimming semicolons isn't enough, since you can also separate commands with `&`, `&&`, `|`, and `||`. There are [even more ways of injecting commands that might work in different situations](https://portswigger.net/web-security/os-command-injection), so if one of those doesn't work, it doesn't necessarily mean that the script isn't vulnerable.

<!-- Python examples -->

<!-- Simple use case with an example app (flask?) -->

<!-- Should have some linked CTF challenges or places to learn more -->
