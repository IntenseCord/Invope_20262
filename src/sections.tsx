/**
 * sections.tsx — REGISTRO CENTRAL de secciones.
 * Define, en un solo lugar, todas las secciones de análisis y su ubicación en
 * el menú (por página) y en el modo presentación. Agregar una sección nueva es
 * tan simple como añadir una entrada aquí (extensibilidad sin tocar el resto).
 */
import type { ComponentType } from 'react';
import { ProblemOverview } from './components/ProblemOverview';
import { DataEditor } from './components/DataEditor';
import { PayoffMatrix } from './components/PayoffMatrix';
import { ProbabilityView } from './components/ProbabilityView';
import { ExpectedValue } from './components/ExpectedValue';
import { DecisionTree } from './components/DecisionTree';
import { IndifferenceAnalysis } from './components/IndifferenceAnalysis';
import { RobustnessAnalysis } from './components/RobustnessAnalysis';
import { PerfectInformation } from './components/PerfectInformation';
import { DecisionMethods } from './components/DecisionMethods';
import { BayesAnalysis } from './components/BayesAnalysis';
import { SampleInformation } from './components/SampleInformation';
import { GameTheory } from './components/GameTheory';
import { ResultSummary } from './components/ResultSummary';

export type PageId = 'overview' | 'decision' | 'sample' | 'game';

export interface SectionDef {
  id: string;
  navLabel: string;
  page: PageId;
  /** Se muestra como diapositiva en el modo presentación. */
  presentation: boolean;
  Component: ComponentType;
}

export const PAGES: { id: PageId; label: string }[] = [
  { id: 'overview', label: 'Planteamiento' },
  { id: 'decision', label: 'Análisis de decisión' },
  { id: 'sample', label: 'Información muestral' },
  { id: 'game', label: 'Teoría de juegos' },
];

export const SECTIONS: SectionDef[] = [
  { id: 'overview', navLabel: 'Problema y datos', page: 'overview', presentation: true, Component: ProblemOverview },
  { id: 'editor', navLabel: 'Modificar datos', page: 'overview', presentation: false, Component: DataEditor },
  { id: 'payoff', navLabel: 'Matriz de pagos', page: 'overview', presentation: true, Component: PayoffMatrix },
  { id: 'probability', navLabel: 'Probabilidades', page: 'decision', presentation: true, Component: ProbabilityView },
  { id: 'expected', navLabel: 'Valor esperado', page: 'decision', presentation: true, Component: ExpectedValue },
  { id: 'tree', navLabel: 'Árbol de decisión', page: 'decision', presentation: true, Component: DecisionTree },
  { id: 'indifference', navLabel: 'Punto de indiferencia', page: 'decision', presentation: false, Component: IndifferenceAnalysis },
  { id: 'robustness', navLabel: 'Robustez', page: 'decision', presentation: false, Component: RobustnessAnalysis },
  { id: 'perfect', navLabel: 'Información perfecta', page: 'decision', presentation: true, Component: PerfectInformation },
  { id: 'methods', navLabel: 'Maximin · Maximax · PEM', page: 'decision', presentation: false, Component: DecisionMethods },
  { id: 'bayes', navLabel: 'Bayes', page: 'sample', presentation: false, Component: BayesAnalysis },
  { id: 'sample', navLabel: 'Valor de la información', page: 'sample', presentation: true, Component: SampleInformation },
  { id: 'game', navLabel: 'Juego y punto de silla', page: 'game', presentation: true, Component: GameTheory },
  { id: 'result', navLabel: 'Resultado', page: 'overview', presentation: true, Component: ResultSummary },
];

/** Orden explícito de las diapositivas del modo presentación. */
export const PRESENTATION_ORDER: string[] = [
  'overview',
  'payoff',
  'probability',
  'expected',
  'tree',
  'perfect',
  'sample',
  'game',
  'result',
];

export function presentationSections(): SectionDef[] {
  return PRESENTATION_ORDER.map(
    (id) => SECTIONS.find((s) => s.id === id)!
  ).filter(Boolean);
}
