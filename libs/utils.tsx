import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"; 

export function cn(...classes: ClassValue[]) {
    return twMerge(clsx(classes));
}

//note: este es un gist que sirve para hacer mas interactiva las classes
// solo cambiar 
