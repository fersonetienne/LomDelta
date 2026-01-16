export default function Home() {
  return (
    <main>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
        borderBottom: "1px solid #eee"
      }}>
        <strong>LomDelta</strong>
        <input
          placeholder="Rechercher des produits"
          style={{ padding: "8px", width: "50%" }}
        />
        <span>🛒</span>
      </header>

      <section style={{ padding: "24px" }}>
        <h1>Bienvenue sur LomDelta</h1>
        <p>Marketplace nouvelle génération</p>
      </section>
    </main>
  );
}
