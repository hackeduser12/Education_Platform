export default function CoursesSkeleton() {
  return (
    <>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="bento-card"
          style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 16 }}
        >
          <div className="skeleton" style={{ width: 40, height: 40, borderRadius: 10 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div className="skeleton" style={{ height: 14, width: "80%" }} />
            <div className="skeleton" style={{ height: 11, width: "50%" }} />
          </div>
          <div className="skeleton" style={{ height: 4, width: "100%", borderRadius: 9999 }} />
        </div>
      ))}
    </>
  );
}
