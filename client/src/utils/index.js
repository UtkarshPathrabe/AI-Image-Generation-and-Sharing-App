import FileSaver from 'file-saver';

import { surpriseMePrompts } from '../constants';

export const getRandomPrompt = (prompt) => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  return (randomPrompt === prompt) ? getRandomPrompt(prompt) : randomPrompt;
};

export const downloadImage = async (_id, photo) => {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
};
