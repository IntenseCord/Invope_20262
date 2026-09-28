/**
 * PageRenderer.tsx — renderiza, apiladas, todas las secciones de una página.
 * Cada sección se envuelve en un ancla (id) para poder desplazarse desde el menú.
 */
import { SECTIONS, type PageId } from '../sections';

export function PageRenderer({ page }: { page: PageId }) {
  const sections = SECTIONS.filter((s) => s.page === page);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {sections.map((s) => {
        const Component = s.Component;
        return (
          <div key={s.id} id={`section-${s.id}`} style={{ scrollMarginTop: 76 }}>
            <Component />
          </div>
        );
      })}
    </div>
  );
}
