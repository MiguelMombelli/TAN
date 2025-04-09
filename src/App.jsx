import { Button, Typography, Box } from "@mui/material";
import { useEffect } from "react";
import logo from './assets/icono_tan.png'; // Ruta relativa desde 'src'

export default function App() {
  useEffect(() => {
    document.title = "TAN - Transcriptor Offline";
  }, []);

  return (
    <main
      style={{
        backgroundColor: "#F2D7A1", // Fondo marrón claro
        color: "black", // Color de texto negro para contraste
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Asegura que los elementos estén alineados hacia el top
        alignItems: "center", // Centra la información horizontalmente
        minHeight: "100vh", // Asegura que el contenedor tenga al menos el 100% de la altura de la pantalla
        padding: "50px", // Ajusta el padding para que haya más espacio alrededor
      }}
    >
      <Box
        style={{
          backgroundColor: "#FFFFFF", // Fondo blanco donde se muestra la info
          padding: "50px", // Mayor padding para que se vea más centrado
          borderRadius: "8px", // Bordes redondeados para un look más amigable
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Sombra para profundidad
          width: "100%", // Ocupa todo el ancho disponible
          maxWidth: "1200px", // Limita el ancho máximo para pantallas grandes
          boxSizing: "border-box", // Asegura que el padding no se desborde
          marginTop: "550px", // Añadir un margen superior más grande para separar el contenido
        }}
      >
        <Box textAlign="center">
          <img
            src={logo} // La variable logo contiene la URL de la imagen
            alt="Logo TAN"
            style={{
              maxWidth: "150px",
              width: "100%",
              height: "auto",
              marginBottom: "20px",
              marginTop: "20px", // Espacio adicional para el logo
            }}
          />
          <Typography variant="h4" component="h1" style={{ fontWeight: "bold", marginBottom: "16px" }}>
            TAN - Transcriptor Offline
          </Typography>
          <Typography variant="body1" style={{ marginBottom: "24px" }}>
            Una app de escritorio para transcribir audio automáticamente usando Whisper, sin conexión a internet.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="https://github.com/MiguelMombelli/TAN/releases/download/v1.0.0/TAN.zip"
            style={{
              backgroundColor: "#FF6F00", // Color de fondo del botón
              fontSize: "16px",
              padding: "10px 20px",
              ":hover": { backgroundColor: "#D35400" },
            }}
          >
            Descargar ZIP
          </Button>
        </Box>

        {/* Nueva sección que explica la app */}
        <section style={{ marginTop: "40px", textAlign: "center" }}>
          <Typography variant="h6" component="h2" style={{ marginBottom: "16px", borderBottom: "2px solid #FF6F00" }}>
            ¿Qué hace TAN?
          </Typography>
          <Typography variant="body1" style={{ marginBottom: "20px", lineHeight: "1.6" }}>
            TAN es una aplicación de transcripción offline que te permite convertir audios y videos en texto de manera rápida y precisa. 
            Utiliza el modelo Whisper de OpenAI, lo que garantiza transcripciones precisas incluso sin conexión a internet. 
            La app es ideal para transcribir grabaciones de reuniones, entrevistas, conferencias, o cualquier tipo de audio y video de forma local y privada.
          </Typography>
        </section>

        <section style={{ marginTop: "40px" }}>
          <Typography variant="h6" component="h2" style={{ marginBottom: "16px", borderBottom: "2px solid #FF6F00" }}>
            Guía de Uso
          </Typography>
          <ol style={{ paddingLeft: "20px" }}>
            <li>Descargá el archivo ZIP desde el botón de arriba.</li>
            <li>Extraé el contenido en una carpeta.</li>
            <li>Ejecutá <code>TAN.exe</code> (no requiere instalación).</li>
            <li>Cargá un archivo de audio desde la interfaz y esperá la transcripción.</li>
          </ol>
        </section>

        <section style={{ marginTop: "40px" }}>
          <Typography variant="h6" component="h2" style={{ marginBottom: "16px", borderBottom: "2px solid #FF6F00" }}>
            Requisitos del Sistema
          </Typography>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Windows 10 o superior (64 bits).</li>
            <li>Procesador con soporte SSE4.1 (la mayoría de los Intel/AMD desde 2008).</li>
            <li>4 GB de RAM mínimo (se recomienda 8 GB).</li>
            <li>No requiere internet, FFmpeg incluido.</li>
          </ul>
        </section>

        <footer style={{ marginTop: "40px", textAlign: "center", fontSize: "12px", color: "#888" }}>
          Hecho por Miguel Mombelli.
        </footer>
      </Box>
    </main>
  );
}
