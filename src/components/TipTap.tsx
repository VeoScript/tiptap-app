import Link from "next/link";
import clsx from "clsx";

import { useEditor, EditorContent, EditorContentProps } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";

import { documentStore } from "~/store";

const MenuBar = ({ editor }: EditorContentProps) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center justify-center w-full p-2 text-center gap-2">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive("heading", { level: 1 }) &&
            "bg-neutral-700 text-white"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-5 -7 24 24"
          width="128"
          height="128"
          preserveAspectRatio="xMinYMin"
          className="w-6 h-6 fill-current"
          fill="currentColor"
        >
          <path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3zm9.52.779H10V3h3.36v7h-1.84V4.779z" />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive("heading", { level: 2 }) &&
            "bg-neutral-700 text-white"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-4.5 -7 24 24"
          width="128"
          height="128"
          preserveAspectRatio="xMinYMin"
          className="w-6 h-6 fill-current"
          fill="currentColor"
        >
          <path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3zm12.88 4.352V10H10V8.986l.1-.246 1.785-1.913c.43-.435.793-.77.923-1.011.124-.23.182-.427.182-.587 0-.14-.04-.242-.127-.327a.469.469 0 0 0-.351-.127.443.443 0 0 0-.355.158c-.105.117-.165.288-.173.525l-.012.338h-1.824l.016-.366c.034-.735.272-1.33.718-1.77.446-.44 1.02-.66 1.703-.66.424 0 .805.091 1.14.275.336.186.606.455.806.8.198.343.3.7.3 1.063 0 .416-.23.849-.456 1.307-.222.45-.534.876-1.064 1.555l-.116.123-.254.229h1.938z" />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive("heading", { level: 3 }) &&
            "bg-neutral-700 text-white"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-4.5 -6.5 24 24"
          width="128"
          height="128"
          preserveAspectRatio="xMinYMin"
          className="w-6 h-6 fill-current"
          fill="currentColor"
        >
          <path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3zm12.453 2.513l.043.055c.254.334.38.728.38 1.172 0 .637-.239 1.187-.707 1.628-.466.439-1.06.658-1.763.658-.671 0-1.235-.209-1.671-.627-.436-.418-.673-.983-.713-1.676L10 7.353h1.803l.047.295c.038.238.112.397.215.49.1.091.23.137.402.137a.566.566 0 0 0 .422-.159.5.5 0 0 0 .158-.38c0-.163-.067-.295-.224-.419-.17-.134-.438-.21-.815-.215l-.345-.004v-1.17l.345-.004c.377-.004.646-.08.815-.215.157-.124.224-.255.224-.418a.5.5 0 0 0-.158-.381.566.566 0 0 0-.422-.159.568.568 0 0 0-.402.138c-.103.092-.177.251-.215.489l-.047.295H10l.022-.37c.04-.693.277-1.258.713-1.675.436-.419 1-.628 1.67-.628.704 0 1.298.22 1.764.658.468.441.708.991.708 1.629a1.892 1.892 0 0 1-.424 1.226z" />
        </svg>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-7 -5.5 24 24"
          width="128"
          height="128"
          preserveAspectRatio="xMinYMin"
          className="w-6 h-6 fill-current"
          fill="currentColor"
        >
          <path d="M3.657 4.935H1.15a2.997 2.997 0 0 1-.15-.94v-.497A3.498 3.498 0 0 1 4.498 0H6a3 3 0 0 1 3 3 1 1 0 1 1-2 0 1 1 0 0 0-1-1H4.498C3.67 2 3 2.67 3 3.498v.497a1 1 0 0 0 .657.94zm5.186 2.1c.102.301.157.624.157.96v.528a3.528 3.528 0 0 1-3.528 3.528H4a3 3 0 0 1-3-3V9a1 1 0 1 1 2 0v.05a1 1 0 0 0 1 1h1.472C6.316 10.05 7 9.367 7 8.523v-.528a1 1 0 0 0-.72-.96h2.563zM.5 5.51h9a.5.5 0 0 1 0 1h-9a.5.5 0 1 1 0-1z" />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive("highlight") && "bg-neutral-700 text-white"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="3 -2 24 24"
          width="128"
          height="128"
          preserveAspectRatio="xMinYMin"
          className="w-6 h-6 fill-current"
          fill="currentColor"
        >
          <path d="M8.038 11.06l-1.035 3.207 1.776 1.775 3.165-1.077-3.906-3.906zm1.24-1.59l4.242 4.243 6.364-6.364a2 2 0 0 0 0-2.829L18.47 3.106a2 2 0 0 0-2.829 0L9.277 9.47zm-3.503 6.4L3.88 17.765l1.653 1.151 1.644-1.644-1.402-1.402zM19.884 1.692l1.414 1.414a4 4 0 0 1 0 5.657l-7.778 7.778-4.22 1.437-3.536 3.535L.778 18.04l4.291-4.292L6.45 9.47l7.778-7.778a4 4 0 0 1 5.657 0z" />
        </svg>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-5 -7 24 24"
          width="128"
          height="128"
          preserveAspectRatio="xMinYMin"
          className="w-6 h-6 fill-current"
          fill="currentColor"
        >
          <path d="M1 0h6a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm0 8h8a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive({ textAlign: "center" }) &&
            "bg-neutral-700 text-white"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-5 -7 24 24"
          width="128"
          height="128"
          preserveAspectRatio="xMinYMin"
          className="w-6 h-6 fill-current"
          fill="currentColor"
        >
          <path d="M3 0h8a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 8h8a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive({ textAlign: "right" }) && "bg-neutral-700 text-white"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-5 -7 24 24"
          width="128"
          height="128"
          preserveAspectRatio="xMinYMin"
          className="w-6 h-6 fill-current"
          fill="currentColor"
        >
          <path d="M7 0h6a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2zM5 8h8a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={clsx(
          "w-auto px-3 rounded-md border border-neutral-700",
          editor.isActive({ textAlign: "justify" }) &&
            "bg-neutral-700 text-white"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-5 -7 24 24"
          width="128"
          height="128"
          preserveAspectRatio="xMinYMin"
          className="w-6 h-6 fill-current"
          fill="currentColor"
        >
          <path d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" />
        </svg>
      </button>
    </div>
  );
};

const FootBar = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full p-3">
      <span className="font-light text-xs">
        Powered by:{" "}
        <Link href="https://tiptap.dev/" target="_blank">
          TipTap
        </Link>
      </span>
      <span className="font-light text-xs">by Veoscript</span>
    </div>
  );
};

const TipTap = () => {
  const { documentValue, setDocumentValue } = documentStore();

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
      setDocumentValue(event.editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col items-center w-full overflow-hidden rounded-xl border-4 border-neutral-900 text-white bg-neutral-900">
      <MenuBar editor={editor} />
      <EditorContent
        className="prose w-full max-w-full h-full min-h-[20rem] px-2 bg-white"
        editor={editor}
      />
      <FootBar />
    </div>
  );
};

export default TipTap;
