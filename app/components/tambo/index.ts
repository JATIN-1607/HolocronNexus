import { ComponentType } from 'react';
import { z } from 'zod';

// Import all Sith-themed generative components
import { SithCodeBlock } from './SithCodeBlock';
import { PowerMeter } from './PowerMeter';
import { AncientScroll } from './AncientScroll';
import { KnowledgeCard } from './KnowledgeCard';
import { CommandTerminal } from './CommandTerminal';
import { DataHologram } from './DataHologram';
import { RitualChecklist } from './RitualChecklist';
import { TechniqueDiagram } from './TechniqueDiagram';

/**
 * Tambo Component Registry
 * 
 * These components are registered with Tambo AI and can be dynamically
 * rendered by the AI based on the conversation context.
 */

export const tamboComponents = [
    // Code display with Sith-themed syntax highlighting
    {
        name: 'SithCodeBlock',
        component: SithCodeBlock as ComponentType<any>,
        propsSchema: z.object({
            code: z.string().default('').describe('The code to display'),
            language: z.string().default('javascript').describe('Programming language'),
            title: z.string().optional().describe('Optional title'),
            explanation: z.string().optional().describe('Optional explanation'),
        }),
        description: 'Displays code with dark syntax highlighting. Use for code examples.',
    },

    // Visual power/progress meter
    {
        name: 'PowerMeter',
        component: PowerMeter as ComponentType<any>,
        propsSchema: z.object({
            skill: z.string().default('Skill').describe('The skill being measured'),
            level: z.number().min(0).max(100).default(50).describe('Mastery level 0-100'),
            description: z.string().optional().describe('Optional description'),
        }),
        description: 'Shows skill/progress meter. Use for skill levels or progress.',
    },

    // Long-form knowledge article
    {
        name: 'AncientScroll',
        component: AncientScroll as ComponentType<any>,
        propsSchema: z.object({
            title: z.string().default('Ancient Knowledge').describe('Article title'),
            content: z.string().default('').describe('Main content in markdown'),
            category: z.enum(['tutorial', 'concept', 'history', 'reference']).default('concept').describe('Type of knowledge'),
            difficulty: z.enum(['beginner', 'intermediate', 'advanced', 'master']).default('beginner').describe('Difficulty level'),
        }),
        description: 'Long-form tutorials and explanations. Use for detailed content.',
    },

    // Quick fact or tip card
    {
        name: 'KnowledgeCard',
        component: KnowledgeCard as ComponentType<any>,
        propsSchema: z.object({
            title: z.string().default('Knowledge').describe('Card title'),
            content: z.string().default('').describe('Brief content or tip'),
            type: z.enum(['tip', 'warning', 'info', 'success']).default('info').describe('Card type'),
            actionLabel: z.string().optional().describe('Optional action button'),
        }),
        description: 'Quick tips or information cards. Use for brief info.',
    },

    // Interactive command executor
    {
        name: 'CommandTerminal',
        component: CommandTerminal as ComponentType<any>,
        propsSchema: z.object({
            commands: z.array(z.string()).default([]).describe('Commands to show/execute'),
            language: z.string().default('bash').describe('Terminal language'),
            title: z.string().optional().describe('Terminal title'),
            autoExecute: z.boolean().default(false).describe('Auto-execute commands'),
        }),
        description: 'Terminal for CLI commands. Use for setup instructions.',
    },

    // Data visualization (charts/graphs)
    {
        name: 'DataHologram',
        component: DataHologram as ComponentType<any>,
        propsSchema: z.object({
            type: z.enum(['bar', 'line', 'pie', 'radar']).default('bar').describe('Chart type'),
            data: z.array(z.object({
                label: z.string(),
                value: z.number(),
            })).default([]).describe('Data points'),
            title: z.string().default('Data Visualization').describe('Chart title'),
            description: z.string().optional().describe('Chart description'),
        }),
        description: 'Charts and data visualization. Use for statistics.',
    },

    // Interactive checklist for multi-step tasks
    {
        name: 'RitualChecklist',
        component: RitualChecklist as ComponentType<any>,
        propsSchema: z.object({
            title: z.string().default('Checklist').describe('Checklist title'),
            items: z.array(z.object({
                id: z.string(),
                text: z.string(),
                completed: z.boolean().default(false),
            })).default([]).describe('Checklist items'),
            description: z.string().optional().describe('Checklist description'),
        }),
        description: 'Interactive checklists. Use for multi-step guides.',
    },

    // Visual diagram or flowchart
    {
        name: 'TechniqueDiagram',
        component: TechniqueDiagram as ComponentType<any>,
        propsSchema: z.object({
            type: z.enum(['flowchart', 'sequence', 'class', 'state']).default('flowchart').describe('Diagram type'),
            mermaidCode: z.string().default('graph TD\n  A[Start] --> B[End]').describe('Mermaid diagram syntax'),
            title: z.string().optional().describe('Diagram title'),
            description: z.string().optional().describe('Diagram explanation'),
        }),
        description: 'Flowcharts and diagrams. Use for visual explanations.',
    },
];

// Export type for TypeScript
export type TamboComponentsType = typeof tamboComponents;
