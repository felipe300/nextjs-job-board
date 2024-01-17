import ReactMardown from "react-markdown";

type MarkdownProps = {
  children: string;
};

export default function Markdown({ children }: MarkdownProps) {
  return (
    <ReactMardown
      className="space-y-3"
      components={{
        ul: (props) => <ul className="list-inside list-disc" {...props} />,
        a: (props) => (
          <a className="text-green-500 underline" target="_blank" {...props} />
        ),
      }}
    >
      {children}
    </ReactMardown>
  );
}
