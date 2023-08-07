import { useRef } from "react";

export function useHomeHooks (){
  const homeRef = useRef({
    handleScroll(callback: Function){
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrolledToBottom = scrollTop + clientHeight >= scrollHeight;

      if (scrolledToBottom) {
        callback()
      }
    }
  })

  return {
    handleScroll: homeRef.current.handleScroll
  }
}