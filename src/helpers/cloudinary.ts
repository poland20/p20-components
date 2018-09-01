import { basename } from 'path';
const cloudinary: any = require('cloudinary');

const sizeTransformations = [
  'fit',
  'limit',
  'mfit',
  'lfill',
  'pad',
  'lpad',
  'mpad',
  'crop',
  'thumb',
];

export interface TransformationOptions {
  [key: string]: string;
}

export type TransformationFunction =
  (img: string, width?: number, height?: number, options?: TransformationOptions) => string;

/**
 * Define the image helpers by creating a function for each
 * of defined transformations insizeTransformations.
 * IMPORTANT: Assumes that cloudinary.config() was called
 */
function imageHelpers() {
  const functions: {[name: string]: TransformationFunction} = {};
  sizeTransformations.forEach((t) => {
    functions[t] = (img, width, height, options) => cloudinary.url(basename(img), {
      width, height, crop: t, secure: true,
    });
  });
  return functions;
}

export const imgLimit = imageHelpers().limit;
