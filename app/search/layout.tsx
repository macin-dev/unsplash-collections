import { Suspense } from "react";
import Form from "next/form";
import Loading from "../loading";
import SearchBarWithQuery from "../components/SearchBarWithQuery";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="bg-linear-to-r from-orange-300 via-red-400 to-fuchsia-700 h-20 relative mb-18">
        <Form
          action="/search"
          className="absolute max-w-132 w-full left-1/2 transForm -translate-x-1/2 bottom-0 translate-y-1/2"
        >
          {/* Client Component */}
          <SearchBarWithQuery />
        </Form>
      </div>

      <Suspense fallback={<Loading />}>{children}</Suspense>
    </section>
  );
}
