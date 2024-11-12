// components/Layout.tsx
interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-4"> {/* Header content here */} </header>
            <main>{children}</main>
      <footer className="p-4"> {/* Footer content here */} </footer>
    </div>
)
}
