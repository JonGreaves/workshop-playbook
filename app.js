const workshopTypes = [
  {
    mode: 'Alignment Discovery',
    category: 'Alignment',
    purpose: 'Align people before solving problems.',
    description: 'Use this when goals, priorities, stakeholders, or success measures are unclear. The session creates shared language, decision criteria, and confidence before the team moves into problem solving.',
    scenarios: ['New client engagement', 'Stakeholder disagreement', 'Confused roadmap', 'Product reset', 'Executive uncertainty'],
    activities: ['Vision canvas', 'Stakeholder mapping', 'Assumption mapping', 'Product principles', 'Success metric ladders'],
    deliverables: ['Product vision', 'Strategic assumptions', 'Agreed outcomes', 'Prioritised risks', 'Decision log']
  },
  {
    mode: 'Problem Discovery',
    category: 'Problem',
    purpose: 'Understand users, pains, behaviours, and context.',
    description: 'Use this when the team needs to understand the real-world problem before exploring solutions. It is especially valuable when adoption, churn, experience friction, or user behaviour is poorly understood.',
    scenarios: ['Greenfield product', 'New market', 'Poor adoption', 'Churn problems', 'Feature uncertainty'],
    activities: ['Research synthesis', 'Journey mapping', 'Jobs-to-be-Done', 'Service blueprinting', 'Problem ranking'],
    deliverables: ['Opportunity areas', 'Pain point hierarchy', 'Behavioural insights', 'Journey map', 'Hypothesis backlog']
  },
  {
    mode: 'Opportunity Discovery',
    category: 'Opportunity',
    purpose: 'Explore solution directions before committing.',
    description: 'Use this when the problem space is understood enough to explore multiple possible solution paths. It encourages divergent thinking before narrowing down to promising concepts.',
    scenarios: ['Blue-sky project', 'Innovation initiative', 'Multiple solution paths', 'AI exploration', 'Platform evolution'],
    activities: ['Opportunity Solution Tree', 'Crazy 8s', 'Brainwriting', 'Concept cards', 'Value vs effort mapping'],
    deliverables: ['Opportunity backlog', 'Concept directions', 'Prioritised experiments', 'Risk map', 'Innovation themes']
  },
  {
    mode: 'Validation Discovery',
    category: 'Validation',
    purpose: 'Reduce delivery risk before engineering investment.',
    description: 'Use this when an idea needs evidence before committing time, money, or engineering effort. The goal is to test desirability, feasibility, viability, and value.',
    scenarios: ['Pre-build validation', 'MVP definition', 'High-risk feature', 'Executive concern', 'Technical uncertainty'],
    activities: ['Assumption mapping', 'Riskiest assumption tests', 'Experiment canvas', 'Prototype review', 'MVP scoping'],
    deliverables: ['Experiment roadmap', 'Validated assumptions', 'MVP definition', 'Decision rationale', 'Evidence repository']
  },
  {
    mode: 'Delivery Discovery',
    category: 'Delivery',
    purpose: 'Support implementation clarity.',
    description: 'Use this when the team needs to move from discovery into delivery without losing clarity. It exposes workflow, dependencies, edge cases, and technical constraints.',
    scenarios: ['Large feature delivery', 'Agile squad onboarding', 'Ambiguous requirements', 'Cross-functional delivery'],
    activities: ['Story mapping', 'Event storming', 'Workflow mapping', 'Dependency mapping', 'Edge case analysis'],
    deliverables: ['Story maps', 'Prioritised slices', 'Technical constraints', 'Workflow definitions', 'Delivery assumptions']
  },
  {
    mode: 'Strategic Discovery',
    category: 'Strategic',
    purpose: 'Shape portfolio and long-term direction.',
    description: 'Use this when the conversation is about investment, capability, portfolio direction, or product ecosystem strategy rather than a single feature or user flow.',
    scenarios: ['Portfolio evolution', 'Multi-product ecosystem', 'Organisational change', 'Platform strategy'],
    activities: ['Wardley mapping', 'Capability mapping', 'Portfolio analysis', 'Ecosystem journeys', 'Strategic bets mapping'],
    deliverables: ['Strategic roadmap', 'Capability priorities', 'Investment themes', 'Organisational alignment']
  }
];

const techniques = [
  {
    name: 'Vision Canvas',
    category: 'Alignment',
    description: 'Defines the product ambition, target audience, value proposition, and strategic direction.',
    detail: 'A Vision Canvas creates a shared view of where the product is going and why it should exist. It is especially useful when teams are using different language, pursuing competing priorities, or jumping into features before agreeing on purpose.',
    useWhen: ['Starting a new client engagement or product initiative.', 'Stakeholders disagree about direction or value.', 'The team needs a concise north star before deeper discovery.'],
    steps: ['Start by asking who the product serves and what meaningful change it should create.', 'Capture the user problem, business ambition, value proposition, differentiators, and success signals.', 'Facilitate discussion around disagreements rather than trying to wordsmith the canvas too early.', 'End by rewriting the canvas into a clear product vision statement.'],
    tips: ['Keep the first pass rough; precision comes after alignment.', 'Watch for generic statements like “make things easier” and push for sharper language.', 'Use the canvas as a decision filter later, not as a one-off artefact.'],
    outputs: ['Product vision statement', 'Strategic intent summary', 'Open questions and assumptions']
  },
  {
    name: 'Product Principles',
    category: 'Alignment',
    description: 'Creates decision-making guardrails that help teams stay consistent over time.',
    detail: 'Product Principles are a small set of explicit rules that guide design and product decisions. They help teams make consistent trade-offs when new requests, constraints, and opinions appear.',
    useWhen: ['A product lacks consistency across features or journeys.', 'Teams frequently debate subjective design decisions.', 'You need shared standards before scaling design or delivery.'],
    steps: ['Collect examples of good and poor product decisions from the current context.', 'Identify the values or behaviours those examples imply.', 'Draft principles as action-oriented statements, not vague ideals.', 'Pressure-test each principle against realistic trade-offs.'],
    tips: ['Good principles help you say no; if they do not guide trade-offs, they are slogans.', 'Limit the set to 3–5 memorable principles.', 'Pair each principle with a “this means / this does not mean” explanation.'],
    outputs: ['Product principle set', 'Decision examples', 'Trade-off guidance']
  },
  {
    name: 'Assumption Mapping',
    category: 'Validation',
    description: 'Surfaces beliefs and ranks them by importance and uncertainty so risk becomes visible.',
    detail: 'Assumption Mapping helps teams separate what they know from what they merely believe. It is one of the most valuable discovery techniques because it turns hidden risk into visible, testable statements.',
    useWhen: ['A team is about to invest in a feature or product direction.', 'Stakeholders are confident but evidence is thin.', 'You need to identify what to validate first.'],
    steps: ['Ask participants to list assumptions about users, value, feasibility, viability, adoption, and risk.', 'Rewrite assumptions as clear statements that could be proven wrong.', 'Plot each assumption by importance and uncertainty.', 'Select the riskiest assumptions as candidates for research or experiments.'],
    tips: ['Challenge “we know” statements by asking what evidence supports them.', 'Keep assumptions specific enough to test.', 'Do this before ideation when confidence feels suspiciously high.'],
    outputs: ['Prioritised assumption map', 'Riskiest assumptions', 'Validation backlog']
  },
  {
    name: 'Stakeholder Mapping',
    category: 'Alignment',
    description: 'Identifies influence, ownership, decision power, and communication needs.',
    detail: 'Stakeholder Mapping clarifies who affects the product, who is affected by it, and who must be involved in decisions. It prevents late-stage surprises caused by missing decision-makers or overlooked operational teams.',
    useWhen: ['Starting a new engagement or initiative.', 'Decision ownership is unclear.', 'There are many departments, vendors, or internal teams involved.'],
    steps: ['List everyone with influence, accountability, expertise, or dependency.', 'Map stakeholders by influence and interest, or by decision role.', 'Identify who must approve, contribute, be informed, or be consulted.', 'Define communication and involvement plans for each group.'],
    tips: ['Do this before planning workshops so the right people are invited.', 'Look for hidden blockers, not just obvious sponsors.', 'Separate decision-makers from opinion-givers.'],
    outputs: ['Stakeholder map', 'RACI-style involvement plan', 'Engagement risks']
  },
  {
    name: 'Journey Mapping',
    category: 'Problem',
    description: 'Visualises the user experience over time to reveal friction, emotion, and opportunity.',
    detail: 'Journey Mapping helps teams understand what users go through before, during, and after interacting with a product or service. It is powerful because it moves discussion away from isolated screens and toward the whole experience.',
    useWhen: ['The team needs to understand user friction across a flow.', 'There are handoffs between channels, teams, or systems.', 'You need to identify opportunity areas in an existing experience.'],
    steps: ['Choose a specific user type and scenario.', 'Map the stages of the journey from the user’s perspective.', 'Add actions, thoughts, emotions, pain points, questions, and touchpoints.', 'Identify moments of friction, opportunity, and evidence gaps.'],
    tips: ['Avoid mapping every possible journey; pick one important scenario.', 'Use research evidence where available and mark assumptions clearly.', 'Do not let the map end as a poster; convert it into opportunities and decisions.'],
    outputs: ['Journey map', 'Pain point hierarchy', 'Opportunity areas']
  },
  {
    name: 'Jobs-to-be-Done',
    category: 'Problem',
    description: 'Explores the progress users are trying to make beyond surface-level feature needs.',
    detail: 'Jobs-to-be-Done focuses on the underlying progress someone is trying to make in a specific context. It helps teams avoid designing only for stated preferences or demographic personas.',
    useWhen: ['Users request features but motivation is unclear.', 'You need to understand why people switch, adopt, or abandon a product.', 'The product competes with non-obvious alternatives or workarounds.'],
    steps: ['Select a real situation where a user adopted, rejected, or worked around a solution.', 'Explore the trigger, desired progress, constraints, anxieties, and alternatives.', 'Write job statements that combine situation, motivation, and expected outcome.', 'Use the jobs to evaluate opportunities and concepts.'],
    tips: ['Focus on real episodes, not hypothetical opinions.', 'Listen for emotional and social dimensions, not just functional tasks.', 'Ask what users would do if your product did not exist.'],
    outputs: ['Job statements', 'Motivation themes', 'Competing alternatives']
  },
  {
    name: 'Service Blueprinting',
    category: 'Problem',
    description: 'Connects user-facing moments with backstage systems, processes, and teams.',
    detail: 'Service Blueprinting extends journey mapping by showing the operational machinery behind the experience. It is ideal when customer pain is caused by internal process, policy, or system complexity.',
    useWhen: ['A service spans multiple teams or channels.', 'Front-end experience issues are caused by backstage processes.', 'You need to align product, operations, support, and engineering.'],
    steps: ['Map the customer journey stages along the top.', 'Add frontstage touchpoints visible to the user.', 'Add backstage actions, systems, roles, policies, and dependencies.', 'Highlight failure points, bottlenecks, and ownership gaps.'],
    tips: ['Invite people who understand operations, not just product and design.', 'Use separate swimlanes for systems, people, and policies.', 'Convert backstage issues into operational improvement opportunities.'],
    outputs: ['Service blueprint', 'Operational pain points', 'Ownership and dependency map']
  },
  {
    name: 'Affinity Synthesis',
    category: 'Problem',
    description: 'Groups research observations into themes, patterns, and insight areas.',
    detail: 'Affinity Synthesis turns raw observations into meaningful patterns. It is most useful after interviews, usability tests, survey comments, support tickets, or workshop notes.',
    useWhen: ['You have lots of qualitative material and need sense-making.', 'The team needs shared understanding of research findings.', 'You want to move from observations to insight themes.'],
    steps: ['Break raw data into individual observations or evidence notes.', 'Cluster related notes silently before discussing labels.', 'Name clusters as insight statements rather than topic headings.', 'Prioritise themes by evidence strength, user impact, and business relevance.'],
    tips: ['Do not let the loudest stakeholder define the themes too early.', 'Keep evidence attached to each theme.', 'Differentiate observations, interpretations, and recommendations.'],
    outputs: ['Insight themes', 'Evidence clusters', 'Research synthesis summary']
  },
  {
    name: 'Opportunity Solution Tree',
    category: 'Opportunity',
    description: 'Links outcomes, opportunities, solutions, and experiments in a single decision structure.',
    detail: 'An Opportunity Solution Tree helps teams connect what they are trying to achieve with the opportunities, solutions, and experiments that might get them there. It prevents teams from treating ideas as disconnected feature requests.',
    useWhen: ['You have a desired outcome but many possible routes.', 'The team needs to compare opportunities before committing to solutions.', 'A roadmap is feature-heavy and needs reframing around outcomes.'],
    steps: ['Place the desired outcome at the top of the tree.', 'Map user needs, pain points, and opportunities beneath it.', 'Generate multiple solution ideas for each opportunity.', 'Attach experiments to test the most promising or risky branches.'],
    tips: ['Keep opportunities distinct from solutions.', 'Use evidence to prune weak branches.', 'Revisit the tree as learning accumulates.'],
    outputs: ['Opportunity tree', 'Solution options', 'Experiment candidates']
  },
  {
    name: 'Crazy 8s',
    category: 'Opportunity',
    description: 'Forces rapid sketching to generate many possible directions without overthinking.',
    detail: 'Crazy 8s is a fast ideation technique where participants sketch eight ideas in eight minutes. Its value is not artistic quality; it helps break fixation on the first obvious idea.',
    useWhen: ['The group needs to generate many solution directions quickly.', 'Participants are stuck discussing one idea.', 'You want everyone to contribute visually without over-polishing.'],
    steps: ['Frame a clear opportunity or How Might We question.', 'Give each participant eight panels and eight minutes.', 'Ask people to sketch one idea per panel with minimal detail.', 'Review ideas, cluster patterns, and select directions for development.'],
    tips: ['Make it clear that ugly sketches are welcome.', 'Do not start with Crazy 8s before the problem is understood.', 'Follow with critique or concept selection, otherwise the energy dissipates.'],
    outputs: ['Sketch ideas', 'Concept themes', 'Candidates for prototyping']
  },
  {
    name: 'Brainwriting',
    category: 'Opportunity',
    description: 'Allows everyone to contribute ideas quietly before group discussion begins.',
    detail: 'Brainwriting is a structured alternative to brainstorming where participants write ideas individually before sharing. It reduces groupthink and protects quieter voices from being crowded out.',
    useWhen: ['The group includes dominant personalities.', 'You want broad participation before discussion.', 'Participants need time to think before speaking.'],
    steps: ['Provide a clear prompt or opportunity statement.', 'Ask participants to write ideas silently for a fixed time.', 'Optionally rotate ideas so others can build on them.', 'Cluster, discuss, and prioritise ideas as a group.'],
    tips: ['Silence at the start is a feature, not a failure.', 'Use written prompts to keep ideas focused.', 'Combine with dot voting or concept cards for selection.'],
    outputs: ['Idea pool', 'Clustered concepts', 'Prioritised directions']
  },
  {
    name: 'Experiment Canvas',
    category: 'Validation',
    description: 'Defines hypothesis, method, audience, success signal, and learning goal for a test.',
    detail: 'An Experiment Canvas structures how a team will test an assumption. It keeps validation focused on learning rather than simply producing a prototype or running an activity.',
    useWhen: ['A risky assumption needs evidence.', 'The team wants to validate before building.', 'You need to compare potential experiments.'],
    steps: ['Write the assumption or hypothesis being tested.', 'Define the target audience and test method.', 'Identify success signals and decision thresholds.', 'Plan what the team will do if the result is positive, negative, or inconclusive.'],
    tips: ['One experiment should test one main hypothesis.', 'Define success before seeing the results.', 'Prefer the smallest test that can produce credible learning.'],
    outputs: ['Experiment plan', 'Success criteria', 'Learning decision record']
  },
  {
    name: 'MVP Scoping',
    category: 'Validation',
    description: 'Separates essential learning or launch scope from optional enhancements.',
    detail: 'MVP Scoping helps teams define the smallest version of a product or feature that can create value or generate learning. It is less about building less and more about learning sooner.',
    useWhen: ['Scope is expanding rapidly.', 'The team needs to define a first release.', 'Stakeholders disagree about what is essential.'],
    steps: ['Clarify the primary outcome or learning goal.', 'List candidate capabilities, features, and content.', 'Classify each item as essential, supporting, or later.', 'Define release slices and what evidence each slice should produce.'],
    tips: ['Anchor scope to outcomes, not stakeholder preference.', 'Watch for “just in case” features.', 'Use the phrase “minimum valuable” as well as “minimum viable”.'],
    outputs: ['MVP scope', 'Release slices', 'Deferred feature list']
  },
  {
    name: 'Evidence Mapping',
    category: 'Validation',
    description: 'Tracks confidence behind decisions by linking claims to research, data, and experiments.',
    detail: 'Evidence Mapping shows what evidence supports each product claim or decision. It helps teams avoid treating opinions, anecdotes, and validated findings as equal.',
    useWhen: ['Stakeholders are making decisions with mixed evidence quality.', 'You need a durable record of why decisions were made.', 'Research findings need to inform prioritisation.'],
    steps: ['List key claims, assumptions, or decisions.', 'Attach supporting evidence such as research, analytics, experiments, or support data.', 'Rate evidence strength and confidence.', 'Highlight gaps that need further discovery.'],
    tips: ['Make weak evidence visible without shaming the team.', 'Use a simple confidence scale so the artefact stays usable.', 'Link back to source material wherever possible.'],
    outputs: ['Evidence map', 'Confidence ratings', 'Evidence gaps']
  },
  {
    name: 'Story Mapping',
    category: 'Delivery',
    description: 'Organises user activities and product functionality into prioritised delivery slices.',
    detail: 'Story Mapping arranges user activities horizontally and the supporting stories vertically. It helps teams understand the whole experience while identifying sensible release slices.',
    useWhen: ['Moving from discovery into delivery.', 'The team needs to break down a complex feature.', 'You want to align product, design, and engineering around scope.'],
    steps: ['Map the user’s major activities from left to right.', 'Add tasks or stories beneath each activity.', 'Discuss dependencies, gaps, and assumptions.', 'Draw horizontal slices for MVP, later releases, and enhancements.'],
    tips: ['Start with user activities, not system components.', 'Keep vertical slices outcome-oriented.', 'Invite engineering early so feasibility informs slicing.'],
    outputs: ['Story map', 'Release slices', 'Delivery assumptions']
  },
  {
    name: 'Event Storming',
    category: 'Delivery',
    description: 'Helps cross-functional teams understand complex domains, events, commands, and systems.',
    detail: 'Event Storming is a collaborative modelling technique used to explore how a business process or software domain behaves over time. It is particularly effective for complex systems with many rules and handoffs.',
    useWhen: ['The product involves complex workflows or business rules.', 'Engineering and business stakeholders need shared domain understanding.', 'Requirements are ambiguous or inconsistent.'],
    steps: ['Map domain events in chronological order using plain language.', 'Add commands, actors, policies, systems, and external triggers.', 'Identify hotspots, conflicts, missing information, and edge cases.', 'Use the model to inform architecture, stories, or process redesign.'],
    tips: ['Use business language before technical terminology.', 'Invite domain experts who know the messy reality.', 'Treat disagreements as signals of hidden complexity.'],
    outputs: ['Domain event map', 'Hotspots and edge cases', 'System/process insights']
  },
  {
    name: 'Dependency Mapping',
    category: 'Delivery',
    description: 'Makes sequencing, ownership, and coordination risks visible before delivery begins.',
    detail: 'Dependency Mapping identifies what must happen before, during, and after delivery for work to succeed. It helps teams spot blockers that do not appear in feature lists.',
    useWhen: ['Multiple teams, systems, or vendors are involved.', 'Delivery sequencing is unclear.', 'There is risk around approvals, data, integrations, or operations.'],
    steps: ['List deliverables, teams, systems, decisions, approvals, and external constraints.', 'Map relationships and sequencing dependencies.', 'Identify critical path items and unresolved ownership.', 'Agree mitigation actions and owners.'],
    tips: ['Include non-technical dependencies such as policy, content, legal, and support.', 'Use this before committing to dates.', 'Convert dependencies into owned actions immediately.'],
    outputs: ['Dependency map', 'Critical path risks', 'Owner/action list']
  },
  {
    name: 'Wardley Mapping',
    category: 'Strategic',
    description: 'Maps value chains and market evolution to support strategic choices.',
    detail: 'Wardley Mapping helps teams understand how components of a product or business create user value and how mature or commoditised those components are. It supports strategic thinking about where to invest, standardise, outsource, or differentiate.',
    useWhen: ['Leadership needs to make strategic investment choices.', 'A platform or ecosystem is evolving.', 'You need to distinguish commodity capabilities from differentiating ones.'],
    steps: ['Identify the user need at the top of the map.', 'Map the value chain of components that support that need.', 'Position components by visibility to the user and stage of evolution.', 'Discuss strategic moves such as build, buy, partner, standardise, or innovate.'],
    tips: ['Do not overcomplicate the first map; conversation matters more than precision.', 'Use it with senior stakeholders who can act on strategic choices.', 'Expect disagreement because the map reveals assumptions about the market.'],
    outputs: ['Wardley map', 'Strategic options', 'Investment implications']
  },
  {
    name: 'Capability Mapping',
    category: 'Strategic',
    description: 'Identifies organisational strengths, gaps, and investment priorities.',
    detail: 'Capability Mapping shows what an organisation must be able to do in order to deliver its strategy. It is useful when product success depends on people, process, technology, and operating model changes.',
    useWhen: ['A product strategy requires organisational change.', 'Teams need to prioritise capability investment.', 'There are gaps between ambition and ability to execute.'],
    steps: ['Define the strategic outcome or product ambition.', 'List the capabilities required to achieve it.', 'Assess current maturity, importance, and pain for each capability.', 'Prioritise capability improvements and owners.'],
    tips: ['Frame capabilities as abilities, not departments.', 'Include operating model and governance, not just technology.', 'Use maturity ratings to create a practical roadmap.'],
    outputs: ['Capability map', 'Maturity assessment', 'Capability roadmap']
  },
  {
    name: 'Strategic Bets Mapping',
    category: 'Strategic',
    description: 'Helps leadership compare and prioritise high-impact product investments.',
    detail: 'Strategic Bets Mapping helps leadership compare possible initiatives by upside, risk, confidence, cost, and strategic fit. It is valuable when the organisation needs to choose where to focus rather than trying to fund everything.',
    useWhen: ['There are competing investment opportunities.', 'Leadership needs to prioritise a portfolio.', 'The team needs to communicate why certain bets matter.'],
    steps: ['List candidate bets or initiatives.', 'Assess each against strategic fit, user value, business upside, confidence, risk, and cost.', 'Plot bets on a decision matrix or portfolio view.', 'Agree which bets to pursue, pause, validate, or reject.'],
    tips: ['Separate certainty from attractiveness; exciting bets may still need validation.', 'Capture the rationale for decisions immediately.', 'Revisit the map as evidence changes.'],
    outputs: ['Prioritised strategic bets', 'Investment rationale', 'Validation or delivery actions']
  }
];

const modeWeights = {
  lifecycle: {
    early: { Alignment: 3, Problem: 2, Opportunity: 1 },
    problem: { Problem: 4, Alignment: 1 },
    opportunity: { Opportunity: 4, Problem: 1 },
    concept: { Opportunity: 2, Validation: 3 },
    validation: { Validation: 5 },
    delivery: { Delivery: 5, Validation: 1 },
    mature: { Problem: 3, Validation: 1, Delivery: 1 },
    strategy: { Strategic: 5, Alignment: 2 }
  },
  unknowns: {
    userNeeds: { Problem: 3 },
    businessGoals: { Alignment: 3, Strategic: 1 },
    technicalFeasibility: { Validation: 2, Delivery: 2 },
    marketDemand: { Validation: 3, Opportunity: 1 },
    priorities: { Alignment: 2, Strategic: 1 },
    successMeasures: { Alignment: 3 },
    journeyProcess: { Problem: 2, Delivery: 2 },
    stakeholderAlignment: { Alignment: 4 },
    featureScope: { Delivery: 2, Validation: 2 },
    risksAssumptions: { Validation: 3, Alignment: 1 }
  },
  audience: {
    executives: { Alignment: 2, Strategic: 2 },
    engineering: { Delivery: 2, Validation: 1 },
    users: { Problem: 2, Validation: 1 },
    ops: { Delivery: 1, Problem: 1 },
    research: { Problem: 1, Validation: 1 },
    business: { Alignment: 1, Strategic: 1 }
  },
  tension: {
    none: {},
    minor: { Alignment: 1 },
    significant: { Alignment: 4 },
    unknown: { Alignment: 1 }
  }
};

function addWeights(scores, weights = {}) {
  Object.entries(weights).forEach(([mode, value]) => {
    scores[mode] = (scores[mode] || 0) + value;
  });
}

function getCheckedValues(form, name) {
  return Array.from(form.querySelectorAll(`input[name="${name}"]:checked`)).map(input => input.value);
}

function recommend(form) {
  const data = new FormData(form);
  const lifecycle = data.get('lifecycle');
  const tension = data.get('tension');
  const size = data.get('size');
  const duration = data.get('duration');
  const format = data.get('format');
  const material = data.get('material');
  const unknowns = getCheckedValues(form, 'unknowns');
  const audience = getCheckedValues(form, 'audience');

  const scores = { Alignment: 0, Problem: 0, Opportunity: 0, Validation: 0, Delivery: 0, Strategic: 0 };
  addWeights(scores, modeWeights.lifecycle[lifecycle]);
  addWeights(scores, modeWeights.tension[tension]);
  unknowns.forEach(value => addWeights(scores, modeWeights.unknowns[value]));
  audience.forEach(value => addWeights(scores, modeWeights.audience[value]));

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const primary = sorted[0][0];
  const secondary = sorted[1][1] >= Math.max(3, sorted[0][1] - 2) ? sorted[1][0] : null;
  const selectedModes = [primary, secondary].filter(Boolean);
  const selectedWorkshops = selectedModes.map(mode => workshopTypes.find(w => w.category === mode));

  const activities = [...new Set(selectedWorkshops.flatMap(w => w.activities))].slice(0, duration === 'short' ? 4 : 7);
  const deliverables = [...new Set(selectedWorkshops.flatMap(w => w.deliverables))].slice(0, 7);

  const facilitationNotes = [];
  if (['xlarge', 'huge'].includes(size)) facilitationNotes.push('Use pre-reads, strict timeboxes, breakout groups, and visible synthesis because larger groups need orchestration rather than open discussion.');
  if (format === 'hybrid') facilitationNotes.push('Design hybrid participation deliberately; avoid treating remote participants as observers.');
  if (format === 'remote') facilitationNotes.push('Use shorter activities, clear written prompts, and frequent synthesis pauses to manage remote attention.');
  if (tension === 'significant') facilitationNotes.push('Begin with alignment and decision criteria before ideation because unresolved tension will distort prioritisation.');
  if (material === 'none') facilitationNotes.push('Keep the session exploratory and assumption-led because there is limited existing evidence to synthesise.');
  if (material === 'significant') facilitationNotes.push('Prepare a synthesis pack beforehand so the workshop can focus on decisions rather than reviewing raw material.');
  if (audience.includes('executives')) facilitationNotes.push('Frame discussion around risk, investment, outcomes, and trade-offs rather than detailed UX mechanics.');
  if (audience.includes('engineering')) facilitationNotes.push('Include feasibility, dependencies, and constraints so the output can survive contact with delivery.');

  return { scores, selectedWorkshops, activities, deliverables, facilitationNotes };
}

function renderWorkshops() {
  const grid = document.getElementById('workshopGrid');
  grid.innerHTML = workshopTypes.map(w => `
    <article class="workshop-card">
      <span class="card-tag">${w.category}</span>
      <h3>${w.mode}</h3>
      <p><strong>${w.purpose}</strong> ${w.description}</p>
      <div><strong>Good for</strong><ul class="mini-list">${w.scenarios.slice(0, 4).map(item => `<li>${item}</li>`).join('')}</ul></div>
      <div><strong>Deliverables</strong><ul class="mini-list">${w.deliverables.slice(0, 4).map(item => `<li>${item}</li>`).join('')}</ul></div>
    </article>
  `).join('');
}

function renderTechniques(filter = 'All') {
  const grid = document.getElementById('techniqueGrid');
  const filtered = filter === 'All' ? techniques : techniques.filter(t => t.category === filter);
  grid.innerHTML = filtered.map(t => `
    <button class="technique-card technique-trigger" type="button" data-technique="${t.name}" aria-label="Open ${t.name} technique details">
      <span class="category">${t.category}</span>
      <h3>${t.name}</h3>
      <p>${t.description}</p>
      <span class="card-link">View technique guide</span>
    </button>
  `).join('');
}

function listItems(items = []) {
  return items.map(item => `<li>${item}</li>`).join('');
}

function ensureTechniqueModal() {
  let modal = document.getElementById('techniqueModal');
  if (modal) return modal;

  modal = document.createElement('div');
  modal.id = 'techniqueModal';
  modal.className = 'modal-backdrop';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="modal-panel" role="document">
      <button class="modal-close" type="button" aria-label="Close technique details">×</button>
      <div id="techniqueModalContent"></div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener('click', event => {
    if (event.target === modal || event.target.classList.contains('modal-close')) closeTechniqueModal();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeTechniqueModal();
  });

  return modal;
}

function openTechniqueModal(name) {
  const technique = techniques.find(item => item.name === name);
  if (!technique) return;

  const modal = ensureTechniqueModal();
  const content = modal.querySelector('#techniqueModalContent');
  content.innerHTML = `
    <span class="card-tag">${technique.category}</span>
    <h2>${technique.name}</h2>
    <p class="modal-lede">${technique.detail}</p>

    <div class="modal-section">
      <h3>Use this when</h3>
      <ul>${listItems(technique.useWhen)}</ul>
    </div>

    <div class="modal-section">
      <h3>How to run it</h3>
      <ol>${listItems(technique.steps)}</ol>
    </div>

    <div class="modal-section">
      <h3>Facilitation hints and tips</h3>
      <ul>${listItems(technique.tips)}</ul>
    </div>

    <div class="modal-section">
      <h3>Typical outputs</h3>
      <ul>${listItems(technique.outputs)}</ul>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-close').focus();
}

function closeTechniqueModal() {
  const modal = document.getElementById('techniqueModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function renderRecommendation(result) {
  const panel = document.getElementById('recommendation');
  const maxScore = Math.max(...Object.values(result.scores), 1);
  const workshopNames = result.selectedWorkshops.map(w => w.mode).join(' + ');

  panel.innerHTML = `
    <p class="eyebrow">Recommended approach</p>
    <h3>${workshopNames}</h3>
    <p>${result.selectedWorkshops.map(w => w.description).join(' ')}</p>

    <div class="rec-block">
      <h3>Mode confidence</h3>
      ${Object.entries(result.scores).sort((a,b) => b[1] - a[1]).map(([mode, score]) => `
        <div class="score-row">
          <strong>${mode}</strong>
          <div class="score-bar"><span style="width:${(score / maxScore) * 100}%"></span></div>
          <span>${score}</span>
        </div>
      `).join('')}
    </div>

    <div class="rec-block">
      <h3>Suggested activity stack</h3>
      <ul>${result.activities.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="rec-block">
      <h3>Expected deliverables</h3>
      <ul>${result.deliverables.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="rec-block">
      <h3>Facilitation guidance</h3>
      <ul>${(result.facilitationNotes.length ? result.facilitationNotes : ['Keep the workshop outcome-led: define the decision, reduce uncertainty, and capture the rationale immediately afterward.']).map(item => `<li>${item}</li>`).join('')}</ul>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderWorkshops();
  renderTechniques();

  document.querySelectorAll('.chip').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(chip => chip.classList.remove('active'));
      button.classList.add('active');
      renderTechniques(button.dataset.filter);
    });
  });

  document.getElementById('techniqueGrid').addEventListener('click', event => {
    const card = event.target.closest('.technique-trigger');
    if (card) openTechniqueModal(card.dataset.technique);
  });

  document.getElementById('intakeForm').addEventListener('submit', event => {
    event.preventDefault();
    renderRecommendation(recommend(event.currentTarget));
  });
});
