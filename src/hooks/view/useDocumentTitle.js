import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `Моя автошкола | ${title}`;
  }, [title]);
}
