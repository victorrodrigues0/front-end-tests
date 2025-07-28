"use client"

import { PostContextType } from "@/types/post/postContextType";
import { createContext } from "react";


export const postContext = createContext<PostContextType | null>(null);