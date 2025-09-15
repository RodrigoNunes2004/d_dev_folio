import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 max-w-sm">
      {toasts.map(({ id, title, description, variant }) => (
        <div
          key={id}
          className={`pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 shadow-lg transition-all animate-in slide-in-from-right-full ${
            variant === "destructive"
              ? "border-red-500 bg-red-50 text-red-900 dark:border-red-900 dark:bg-red-900 dark:text-red-50"
              : "border-green-500 bg-green-50 text-green-900 dark:border-green-900 dark:bg-green-900 dark:text-green-50"
          }`}
        >
          <div className="grid gap-1">
            {title && <div className="text-sm font-semibold">{title}</div>}
            {description && (
              <div className="text-sm opacity-90">{description}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
