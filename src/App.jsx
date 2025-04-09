import { Button } from "@mui/material"
import { useEffect } from "react"

export default function App() {
  useEffect(() => {
    document.title = "TAN - Transcriptor Offline"
  }, [])

  return (
    <main className="bg-[#121212] text-white min-h-screen flex flex-col items-center px-4 py-10 font-sans">
      <header className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">TAN - Transcriptor Offline</h1>
        <p className="text-lg md:text-xl text-gray-300">
          Una app de escritorio para transcribir audio automáticamente usando Whisper, sin conexión a internet.
        </p>
        <Button
          variant="contained"
          color="primary"
          href="https://github.com/tu-usuario/tu-repo/releases/download/v1.0.0/TAN-win64.zip"
          className="mt-6"
          sx={{ backgroundColor: "#00bcd4", ':hover': { backgroundColor: "#0097a7" } }}
        >
          Descargar ZIP
        </Button>
      </header>

      <section className="mt-16 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">Guía de Uso</h2>
        <ol className="list-decimal list-inside text-gray-300 space-y-2">
          <li>Descargá el archivo ZIP desde el botón de arriba.</li>
          <li>Extraé el contenido en una carpeta.</li>
          <li>Ejecutá <code>TAN.exe</code> (no requiere instalación).</li>
          <li>Cargá un archivo de audio desde la interfaz y esperá la transcripción.</li>
        </ol>
      </section>

      <section className="mt-12 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">Requisitos del Sistema</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Windows 10 o superior (64 bits).</li>
          <li>Procesador con soporte SSE4.1 (la mayoría de los Intel/AMD desde 2008).</li>
          <li>4 GB de RAM mínimo (se recomienda 8 GB).</li>
          <li>No requiere internet, FFmpeg incluido.</li>
        </ul>
      </section>

      <footer className="mt-20 text-sm text-gray-500 text-center">
        Hecho con ❤️ por el equipo de TAN. Código abierto en GitHub.
      </footer>
    </main>
  )
}
