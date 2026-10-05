import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { ListNode, ListItemNode } from "@lexical/list";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import type { LexicalState } from "../model/interfaces/IProduct";

interface LexicalViewerProps {
  content: LexicalState;
  className?: string;
}

export const LexicalViewer = ({ content, className }: LexicalViewerProps) => {
  const initialConfig = {
    namespace: "lexical-viewer",
    editable: false,
    editorState: JSON.stringify(content),
    nodes: [ListNode, ListItemNode, HeadingNode, QuoteNode],
    onError: (error: Error) => console.error(error),
    theme: {
      text: {
        bold: "lexical-bold",
        italic: "lexical-italic",
        underline: "lexical-underline",
      },
      list: {
        ul: "lexical-ul",
        ol: "lexical-ol",
        listitem: "lexical-listitem",
      },
      paragraph: "lexical-paragraph",
    },
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable className={`lexical-viewer ${className ?? ""}`} />
        }
        placeholder={null}
        ErrorBoundary={LexicalErrorBoundary}
      />
    </LexicalComposer>
  );
};
