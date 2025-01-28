<template>
  <section id="projects" class="py-20 bg-background-light dark:bg-background-dark relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-leaf-pattern opacity-[0.02] dark:opacity-[0.03]"></div>
    
    <div class="container mx-auto px-4">
        <h2 class="text-5xl font-bold mb-12 text-center text-primary dark:text-primary-light">
          Featured Projects
        </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.title" 
          class="group relative bg-white dark:bg-background rounded-lg overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg">
            <div class="aspect-video overflow-hidden">
              <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2 text-primary-dark dark:text-primary-light group-hover:text-primary transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.technologies" :key="tech"
                  class="px-3 py-1 text-sm rounded-full bg-background dark:bg-background-dark border border-wood/30 text-wood">
                  {{ tech }}
                </span>
              </div>
              
              <div class="flex gap-4">
                <a v-if="project.demo" :href="project.demo" target="_blank"
                  class="px-4 py-2 rounded-lg bg-primary hover:bg-primary-light transition-colors text-white text-sm flex items-center gap-2">
                  <span>Live Demo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a v-if="project.github" :href="project.github" target="_blank"
                  class="px-4 py-2 rounded-lg border border-wood text-wood hover:bg-wood hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span>GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Nuxt 3 and Vue 3, featuring a minimalist design inspired by nature.',
    image: '/projects/portfolio.jpg',
    technologies: ['Vue 3', 'Nuxt 3', 'TailwindCSS', 'TresJS'],
    demo: 'https://fineas.dev',
    github: 'https://github.com/yourusername/portfolio'
  },
  {
    title: 'Project Two',
    description: 'Description of your second project. Highlight the key features and your role in development.',
    image: '/projects/project2.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    demo: 'https://demo2.example.com',
    github: 'https://github.com/yourusername/project2'
  },
  {
    title: 'Project Three',
    description: 'Description of your third project. What problems did it solve? What technologies did you use?',
    image: '/projects/project3.jpg',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    demo: 'https://demo3.example.com',
    github: 'https://github.com/yourusername/project3'
  }
]
</script>

<style scoped>
.bg-leaf-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.432 0 0 13.432 0 30c0 16.568 13.432 30 30 30 16.568 0 30-13.432 30-30C60 13.432 46.568 0 30 0zm0 45C21.715 45 15 38.285 15 30S21.715 15 30 15s15 6.715 15 15-6.715 15-15 15z' fill='%234A6741' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-size: 60px 60px;
}
</style> 