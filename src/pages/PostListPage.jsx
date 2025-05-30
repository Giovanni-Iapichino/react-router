export default function PostListPage() {
  const blogPosts = [
    {
      id: 1,
      title: "I 10 videogiochi che hanno rivoluzionato la storia del gaming",
      date: "2025-05-30",
      author: "Admin",
      summary:
        "Dai classici arcade fino ai tripla A moderni: ecco i titoli che hanno segnato un'epoca.",
      slug: "giochi-che-hanno-fatto-la-storia",
    },
    {
      id: 2,
      title: "Come creare una copertina accattivante per un videogioco indie",
      date: "2025-05-28",
      author: "Admin",
      summary:
        "Analizziamo cosa rende una cover efficace e come progettarla con strumenti gratuiti.",
      slug: "copertina-videogioco-indie",
    },
    {
      id: 3,
      title: "Le colonne sonore più iconiche nella storia dei videogiochi",
      date: "2025-05-25",
      author: "Admin",
      summary:
        "Un viaggio tra le musiche che hanno reso indimenticabili intere generazioni di giochi.",
      slug: "colonne-sonore-videogiochi",
    },
    {
      id: 4,
      title: "Pixel art vs 3D: quale stile grafico scegliere per il tuo gioco?",
      date: "2025-05-22",
      author: "Admin",
      summary:
        "Un confronto tra estetiche retrò e moderne, con pro e contro per sviluppatori e artisti.",
      slug: "pixel-vs-3d-gaming",
    },
    {
      id: 5,
      title: "Come monetizzare una passione per i videogiochi su Etsy",
      date: "2025-05-20",
      author: "Admin",
      summary:
        "Dal merchandise alle risorse digitali: idee per aprire uno shop a tema gaming.",
      slug: "monetizzare-passione-videogiochi",
    },
  ];

  return (
    <div className="container">
      <h1>Articoli del Blog</h1>
      {blogPosts.map((post) => (
        <div key={post.id} className="">
          <h2>{post.title}</h2>
          <p>
            {post.author} - {post.date}
          </p>
          <p>{post.summary}</p>
        </div>
      ))}
    </div>
  );
}
