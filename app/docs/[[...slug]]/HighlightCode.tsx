"use client"
import { useEffect, useLayoutEffect } from "react";
import hljs from 'highlight.js';
export default function HighlightCode() {

    useEffect(() => {
        if (typeof window != undefined) {
            try {


                hljs.highlightAll();
            } catch (error) {

            }
        }
    }, [])
    return <></>
}