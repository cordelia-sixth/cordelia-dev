"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useRef, useState } from "react";

export const SearchField = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  // 日本語入力の場合、変換のためにエンターを2回押すことになるのでそれの判定フラグ
  const [composition, setComposition] = useState(false);

  // 日本語入力開始された時
  const startComposition = () => setComposition(true);

  // エンターを押して変換が終わった時
  const endComposition = () => setComposition(false);

  //　検索フォームにフォーカスされた後にエンターキーが押された時の関数
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        // 押されたのがエンターである、日本語変換が終わっている時
        if (e.key === "Enter" && !composition) {
          // ページ遷移
          location.href = `/search?q=${inputRef.current?.value}`;
        }
      },
      [composition],
    );

  // 現在のURLクエリ（直前に入力されたクエリ）を取得する
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get("q") || "";

  return (
    <div className="relative flex items-center justify-center">
      <input
        type="search"
        name="q"
        ref={inputRef}
        placeholder="記事を検索"
        onKeyDown={handleKeyDown}
        onCompositionStart={startComposition}
        onCompositionEnd={endComposition}
        defaultValue={defaultQuery}
        enterKeyHint="search"
        className="w-[80%] rounded-full p-1 pl-4 text-black outline-none"
      />
    </div>
  );
};
