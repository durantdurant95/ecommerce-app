type Props = {};

export default function ErrorPage({}: Props) {
  return (
    <div className="mx-auto flex max-w-7xl grow flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-semibold">
        Oops! Looks like this page does not exist
      </h1>
    </div>
  );
}
