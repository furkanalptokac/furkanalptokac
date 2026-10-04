#!/usr/bin/env node

import { pathToFileURL } from 'node:url';
import { realpathSync } from 'node:fs';

export const me = {
    bsc: 'Computer Engineer',
    name: 'Furkan Alp Tokaç',
    position: 'Frontend Developer',
    focus: 'Web applications, GIS, and reusable interfaces',
    company: 'Ekinoks Software',
    website: 'https://furkanalp.com',
    github: 'https://github.com/furkanalptokac',
    linkedin: 'https://www.linkedin.com/in/furkanalptokac/',
    stack: 'React, Next.js, Angular, Vue, GIS',
};

const isCLI = process.argv[1] && import.meta.url === pathToFileURL(realpathSync(process.argv[1])).href;

if (isCLI) {
    const color = process.stdout.isTTY && !('NO_COLOR' in process.env) && process.env.TERM !== 'dumb';
    const paint = (code, text) => color ? `\u001b[${code}m${text}\u001b[0m` : text;

    console.log(`
  ${paint('1;36', me.name)}

  ${me.position}
  Interfaces for complex systems.

  ${paint('2', 'building')}  web apps · GIS · reusable UI
  ${paint('2', 'working ')}  ${me.company} · since 2021

  ${paint('36', me.website)}
  ${paint('2', me.github)}
  ${paint('2', me.linkedin)}
`);
}
