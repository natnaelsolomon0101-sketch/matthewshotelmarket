export function SectionHeader({ title, label }: { title: string; label?: string }) {
  return (
    <div className="w-full bg-gradient-to-r from-[#0e1a34] via-[#111f3d] to-[#152249] py-7 px-8 lg:px-16 ring-1 ring-inset ring-white/5">
      <div className="mx-auto max-w-[1440px] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-[3px] h-[28px] bg-[#1a56db] rounded-full shadow-[0_0_12px_rgba(26,86,219,0.6)]" />
          <h2 className="text-white font-black text-[22px] uppercase tracking-[0.16em]" style={{ fontStyle: 'normal' }}>{title}</h2>
        </div>
        {label && (
          <span className="text-white/45 text-[11px] uppercase tracking-[0.18em] hidden md:block font-medium">{label}</span>
        )}
      </div>
    </div>
  );
}
