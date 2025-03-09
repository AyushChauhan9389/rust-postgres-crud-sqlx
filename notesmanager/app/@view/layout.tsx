

export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-2/3 bg-muted h-full rounded-2xl flex justify-center items-center">
            {children}
        </div>
    );
}
