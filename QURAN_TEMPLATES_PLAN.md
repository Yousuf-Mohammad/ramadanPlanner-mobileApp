# Quran Templates Implementation Plan

## Current State Analysis
- QuranTemplate component exists (displays title + START button)
- QuranTracker hardcodes two templates: "1 Ayat Per Day" and "1 Surah Per Day"
- Template selection stores title in cache and shows TargetDetails view

## Proposed Enhancement Plan

### 1. Create Template Configuration
- Define a template schema: `{ id, title, description, type (ayat/surah/juz), defaultTarget, icon }`
- Create templates.json or templates.ts with predefined Quran reading plans
- Examples: 
  - `{id: 'juz-per-day', title: '1 Juz Per Day', type: 'juz', defaultTarget: 1}`
  - `{id: 'surah-per-week', title: '1 Surah Per Week', type: 'surah', defaultTarget: 1, icon: 'calendar'}`
  - Custom/user-defined templates

### 2. Modify QuranTracker
- Replace hardcoded template rendering with dynamic mapping from configuration
- Load templates from config file (or async fetch if remote)
- Maintain selectedTemplateId state instead of just templateTitle
- Pass full template object to handleSubmit for richer data storage

### 3. Enhance Template Selection UI
- Add visual distinction between template types (icons, colors)
- Implement template filtering/categorization (Beginner, Intermediate, Advanced)
- Add template detail preview on selection/hover
- Allow sorting by popularity or recommended order

### 4. Update TargetDetails Integration
- Pass selected template's properties to TargetDetails
- Use template.defaultTarget as initial value in target input
- Show template-specific guidance (e.g., "Juz" vs "Ayat" explanations)

### 5. Template Management Features (Future)
- "Create Custom Template" modal
- Template editing/deletion for user-defined templates
- Template sharing/export capabilities
- Progress tracking per template type

### Implementation Steps
1. Create templates configuration file
2. Refactor QuranTracker to use config-driven rendering
3. Update handleSubmit to store template metadata
4. Modify TargetDetails to utilize template properties
5. Add basic template UI enhancements (icons, descriptions)
6. Test with existing templates and new additions

This approach maintains backward compatibility while making the template system extensible for future Quran reading plans.