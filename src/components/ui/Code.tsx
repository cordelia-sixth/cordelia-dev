import React from "react";

/**
 * 装飾したcodeタグを返す
 * TODO: リンク付きにする予定
 */
export const Code = ({ children }: { children: string }) => {
  return (
    <code className="rounded-3xl border border-white px-2 py-1">
      {children}
    </code>
  );
};
