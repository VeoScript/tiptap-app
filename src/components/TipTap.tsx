import { useState } from "react";
import { useEditor, EditorContent, EditorContentProps } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import clsx from "clsx";

const MenuBar = ({ editor }: EditorContentProps) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="w-full py-5 text-white bg-neutral-900">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={clsx("w-auto px-3 rounded-md", editor.isActive("heading", { level: 1 }) && "bg-neutral-700 text-white")}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={clsx("w-auto px-3 rounded-md", editor.isActive("heading", { level: 2 }) && "bg-neutral-700 text-white")}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={clsx("w-auto px-3 rounded-md", editor.isActive("heading", { level: 3 }) && "bg-neutral-700 text-white")}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={clsx("w-auto px-3 rounded-md", editor.isActive("paragraph") && "bg-neutral-700 text-white")}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={clsx("w-auto px-3 rounded-md", editor.isActive("bold") && "bg-neutral-700 text-white")}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={clsx("w-auto px-3 rounded-md", editor.isActive("italic") && "bg-neutral-700 text-white")}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={clsx("w-auto px-3 rounded-md", editor.isActive("strike") && "bg-neutral-700 text-white")}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={clsx("w-auto px-3 rounded-md", editor.isActive("highlight") && "bg-neutral-700 text-white")}
      >
        highlight
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={clsx("w-auto px-3 rounded-md", editor.isActive("code") && "bg-neutral-700 text-white")}
      >
        code
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={clsx("w-auto px-3 rounded-md", editor.isActive({ textAlign: "left" }) && "bg-neutral-700 text-white")}
      >
        left
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={clsx("w-auto px-3 rounded-md", editor.isActive({ textAlign: "center" }) && "bg-neutral-700 text-white")}
      >
        center
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={clsx("w-auto px-3 rounded-md", editor.isActive({ textAlign: "right" }) && "bg-neutral-700 text-white")}
      >
        right
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={clsx("w-auto px-3 rounded-md", editor.isActive({ textAlign: "justify" }) && "bg-neutral-700 text-white")}
      >
        justify
      </button>
    </div>
  );
};

const TipTap = () => {
  const [documentValue, setDocumentValue] = useState<string>("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: documentValue,
    enablePasteRules: true,
    onUpdate(event) {
      setDocumentValue(event.editor.getText())
    },
  });

  return (
    <div className="flex flex-col items-center w-full overflow-hidden rounded-xl border-4 border-neutral-900">
      <MenuBar editor={editor} />
      <EditorContent
        className="prose w-full max-w-full"
        editor={editor}
      />
    </div>
  );
};

export default TipTap;
