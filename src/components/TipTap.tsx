import { useState } from "react";
import Link from "next/link";
import { useEditor, EditorContent, EditorContentProps } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import clsx from "clsx";

const MenuBar = ({ editor }: EditorContentProps) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="w-full p-2 -mt-3 text-center space-x-3 space-y-3">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive("heading", { level: 1 }) &&
            "bg-neutral-700 text-white"
        )}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive("heading", { level: 2 }) &&
            "bg-neutral-700 text-white"
        )}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive("heading", { level: 3 }) &&
            "bg-neutral-700 text-white"
        )}
      >
        H3
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive("paragraph") && "bg-neutral-700 text-white"
        )}
      >
        ¶
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive("bold") && "bg-neutral-700 text-white"
        )}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive("italic") && "bg-neutral-700 text-white"
        )}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive("strike") && "bg-neutral-700 text-white"
        )}
      >
        Ꟊ
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive("highlight") && "bg-neutral-700 text-white"
        )}
      >
        🖋
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive("code") && "bg-neutral-700 text-white"
        )}
      >
        {`<>`}
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive({ textAlign: "left" }) && "bg-neutral-700 text-white"
        )}
      >
        left
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive({ textAlign: "center" }) &&
            "bg-neutral-700 text-white"
        )}
      >
        center
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive({ textAlign: "right" }) && "bg-neutral-700 text-white"
        )}
      >
        right
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive({ textAlign: "justify" }) &&
            "bg-neutral-700 text-white"
        )}
      >
        justify
      </button>
    </div>
  );
};

const FootBar = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full p-3">
      <span className="font-light text-xs">Powered by: <Link href="https://tiptap.dev/" target="_blank">TipTap</Link></span>
      <span className="font-light text-xs">by Veoscript</span>
    </div>
  );
};

const TipTap = () => {
  const [documentValue, setDocumentValue] = useState<string>("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        emptyEditorClass: "is-editor-empty",
        placeholder: "Write something …",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: documentValue,
    onUpdate(event) {
      setDocumentValue(event.editor.getText());
    },
  });

  return (
    <div className="flex flex-col items-center w-full overflow-hidden rounded-xl border-4 border-neutral-900 text-white bg-neutral-900">
      <MenuBar editor={editor} />
      <EditorContent
        className="prose w-full max-w-full px-2 bg-white"
        editor={editor}
      />
      <FootBar />
    </div>
  );
};

export default TipTap;
