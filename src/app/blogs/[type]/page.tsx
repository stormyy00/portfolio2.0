export async function generateStaticParams() {
  return [
    { type: 'tech' },
    { type: 'life' },
    { type: 'travel' },
    // Add all expected types here
  ];
}

export default function BlogTypePage({ params }: { params: { type: string } }) {
  return (
    <div>
      <h1>Blog Category: {params.type}</h1>
      {/* Render your content */}
    </div>
  );
}
