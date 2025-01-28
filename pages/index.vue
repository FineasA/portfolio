<template>
  <div class="bg-background dark:bg-background-dark">
    <!-- Hero Section -->
    <div class="relative min-h-screen">
      <!-- 3D Background -->
      <div class="absolute inset-0 z-0">
        <TresCanvas alpha>
          <TresPerspectiveCamera :position="[0, 2, 10]" :fov="45" />
          <TresScene>
            <!-- Floating Rocks -->
            <TresMesh v-for="(rock, index) in rocks" :key="index"
              :position="[rock.x, rock.y, rock.z]"
              :rotation="[rock.rotationX, rock.rotationY, rock.rotationZ]"
              :scale="[rock.scale, rock.scale, rock.scale]">
              <TresCylinderGeometry :args="[1, 1, 0.2, 32]" />
              <TresMeshPhysicalMaterial
                :color="0xD3D3D3"
                :metalness="0.3"
                :roughness="0.7"
                :clearcoat="0.5"
                :clearcoatRoughness="0.4"
                :transmission="0.0"
                :opacity="1"
                :reflectivity="0.2"
                :emissive="0x808080"
                :emissiveIntensity="0.1"
                :map="rock.texture"
                :alphaTest="0.5"
              />
            </TresMesh>

            <!-- Lighting -->
            <TresAmbientLight :intensity="0.4" />
            <TresDirectionalLight :position="[5, 5, 5]" :intensity="0.7" :color="0xFFA500" />
            <TresDirectionalLight :position="[-5, -5, -5]" :intensity="0.3" :color="0x4A4A4A" />
            <TresPointLight :position="[0, 3, 0]" :intensity="0.4" :distance="10" :decay="2" :color="0xFFA500" />
          </TresScene>
        </TresCanvas>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-6xl font-bold mb-6 text-primary dark:text-primary-light hover:scale-105 transition-transform">
              Hi, I'm Fineas
            </h1>
            <p class="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto hover:text-gray-800 dark:hover:text-gray-100 transition-colors">
              Welcome to my digital playground. I craft exceptional digital experiences
              with a focus on innovation and user experience.
            </p>
            <div class="flex gap-4 justify-center">
              <button
                @click="scrollToSection('about')"
                class="px-6 py-3 bg-primary text-white hover:bg-primary-light rounded-lg transition-all duration-300 hover:scale-105"
              >
                About Me
              </button>
              <button
                @click="scrollToSection('projects')"
                class="px-6 py-3 border border-wood text-wood hover:bg-wood hover:text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                View Projects
              </button>
            </div>
        </div>
      </div>
    </div>

    <!-- About Me Section -->
    <section id="about" class="py-20 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" 
        style="background-image: radial-gradient(circle at 1px 1px, var(--tw-colors-primary-light) 1px, transparent 0); background-size: 40px 40px;">
      </div>
      
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <!-- Left Column: Image -->
            <div class="relative">
              <div class="aspect-square rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                <img src="/about-me.jpg" alt="Fineas" class="w-full h-full object-cover" />
              </div>
              <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10"></div>
              <div class="absolute -top-6 -left-6 w-48 h-48 bg-wood/10 rounded-2xl -z-10"></div>
            </div>
            
            <!-- Right Column: Content -->
            <div class="space-y-6">
              <h2 class="text-4xl font-bold text-primary dark:text-primary-light">
                About Me
              </h2>
              <div class="prose prose-lg dark:prose-invert">
                <p class="text-gray-600 dark:text-gray-300">
                  I'm a passionate software engineer with a love for creating beautiful, functional, and user-friendly applications. My journey in tech started with a curiosity about how things work, and it has evolved into a career focused on building exceptional digital experiences.
                </p>
                <p class="text-gray-600 dark:text-gray-300">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
                </p>
              </div>
              
              <!-- Skills -->
              <div class="mt-8 space-y-8">
                <div>
                  <h3 class="text-2xl font-bold mb-6 text-primary-dark dark:text-primary-light">Technologies</h3>
                  <div class="flex flex-wrap gap-3">
                    <span v-for="tech in technologies" :key="tech" 
                      class="px-4 py-2 bg-background dark:bg-background-dark rounded-lg border border-primary/20 text-primary dark:text-primary-light hover:border-primary/40 transition-colors">
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 class="text-2xl font-bold mb-6 text-primary-dark dark:text-primary-light">Skills</h3>
                  <div class="space-y-4">
                    <div v-for="skill in skills" :key="skill.name" class="space-y-2">
                      <div class="flex justify-between items-center">
                        <span class="text-primary-dark dark:text-primary-light font-medium">{{ skill.name }}</span>
                        <span class="text-primary/60 dark:text-primary-light/60 text-sm">{{ skill.level }}%</span>
                      </div>
                      <div class="h-2 bg-background dark:bg-background-dark rounded-full overflow-hidden">
                        <div 
                          class="h-full bg-primary/80 dark:bg-primary-light/80 rounded-full transition-all duration-1000 ease-out"
                          :style="{ width: '0%' }"
                          :data-width="skill.level + '%'"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline Section -->
    <section class="py-20 bg-background dark:bg-background-dark relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" 
        style="background-image: linear-gradient(45deg, var(--tw-colors-primary-light) 1px, transparent 1px), linear-gradient(-45deg, var(--tw-colors-primary-light) 1px, transparent 1px);
        background-size: 40px 40px;">
      </div>

      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold text-primary dark:text-primary-light text-center mb-12">
            Experience
          </h2>

          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 dark:bg-primary/10"></div>

            <!-- Timeline Items -->
            <div class="space-y-16">
              <div v-for="(experience, index) in experiences" :key="experience.title" 
                class="relative group"
                :class="{ 'opacity-0 translate-x-8': !experience.isVisible }"
                data-timeline-item
              >
                <!-- Timeline Dot -->
                <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary dark:bg-primary-light rounded-full border-4 border-background dark:border-background-dark shadow-lg transition-transform duration-300 group-hover:scale-125"></div>

                <!-- Content Card -->
                <div class="relative grid grid-cols-1 md:grid-cols-2 gap-8"
                  :class="index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'">
                  <!-- Date -->
                  <div :class="[
                    'text-primary dark:text-primary-light font-medium',
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left order-1 md:order-2'
                  ]">
                    {{ experience.date }}
                  </div>

                  <!-- Content -->
                  <div :class="[
                    'bg-white/10 dark:bg-background-dark/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/5 transition-all duration-300 hover:shadow-xl hover:border-primary/10',
                    index % 2 === 0 ? 'md:text-right order-2 md:order-1' : 'order-2'
                  ]">
                    <h3 class="text-xl font-bold text-primary-dark dark:text-primary-light mb-2">
                      {{ experience.title }}
                    </h3>
                    <div class="text-sm text-primary/60 dark:text-primary-light/60 mb-4">
                      {{ experience.company }}
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">
                      {{ experience.description }}
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2" :class="index % 2 === 0 ? 'justify-end' : 'justify-start'">
                      <span v-for="tech in experience.technologies" :key="tech"
                        class="px-2 py-1 text-xs rounded-md bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary-light border border-primary/10">
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <ProjectsSection />

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-background dark:bg-background-dark relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" 
        style="background-image: linear-gradient(var(--tw-colors-primary-light) 1px, transparent 1px), linear-gradient(to right, var(--tw-colors-primary-light) 1px, transparent 1px);
        background-size: 50px 50px;">
      </div>

      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-primary dark:text-primary-light mb-4">
              Get in Touch
            </h2>
            <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new projects and opportunities.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="bg-white/10 dark:bg-background-dark/30 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-primary/5 dark:border-primary/10">
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-primary dark:text-primary-light mb-1">Name</label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    placeholder="Your name"
                    class="w-full px-4 py-2 rounded-lg bg-white/5 dark:bg-black/5 border border-primary/10 dark:border-primary/10 text-primary-dark dark:text-primary-light placeholder-primary/30 dark:placeholder-primary-light/30 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-primary dark:text-primary-light mb-1">Email</label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    class="w-full px-4 py-2 rounded-lg bg-white/5 dark:bg-black/5 border border-primary/10 dark:border-primary/10 text-primary-dark dark:text-primary-light placeholder-primary/30 dark:placeholder-primary-light/30 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-primary dark:text-primary-light mb-1">Message</label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    rows="4"
                    required
                    placeholder="Your message here..."
                    class="w-full px-4 py-2 rounded-lg bg-white/5 dark:bg-black/5 border border-primary/10 dark:border-primary/10 text-primary-dark dark:text-primary-light placeholder-primary/30 dark:placeholder-primary-light/30 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all duration-200 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full px-6 py-3 bg-primary/90 hover:bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg"
                >
                  <span v-if="isSubmitting">Sending...</span>
                  <span v-else>Send Message</span>
                  <svg v-if="isSubmitting" class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </button>
                <!-- Form Status Messages -->
                <div v-if="formStatus.message" :class="[
                  'text-sm p-3 rounded-lg transition-all duration-300',
                  formStatus.type === 'success' ? 'bg-green-100/80 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-red-100/80 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                ]">
                  {{ formStatus.message }}
                </div>
              </form>
            </div>

            <!-- Contact Info -->
            <div class="space-y-8">
              <!-- Social Links -->
              <div class="space-y-4">
                <h3 class="text-2xl font-bold text-primary-dark dark:text-primary-light">Connect With Me</h3>
                <div class="flex flex-col gap-4">
                  <a href="https://github.com/yourusername" target="_blank" 
                    class="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors group">
                    <div class="w-10 h-10 rounded-lg bg-background dark:bg-background-dark border border-primary/20 group-hover:border-primary/40 flex items-center justify-center transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <span>GitHub</span>
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank"
                    class="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors group">
                    <div class="w-10 h-10 rounded-lg bg-background dark:bg-background-dark border border-primary/20 group-hover:border-primary/40 flex items-center justify-center transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:your.email@example.com"
                    class="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors group">
                    <div class="w-10 h-10 rounded-lg bg-background dark:bg-background-dark border border-primary/20 group-hover:border-primary/40 flex items-center justify-center transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span>Email</span>
                  </a>
                </div>
              </div>

              <!-- Location -->
              <div class="space-y-2">
                <h3 class="text-2xl font-bold text-primary-dark dark:text-primary-light">Location</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  San Francisco Bay Area, CA
                </p>
              </div>

              <!-- Availability -->
              <div class="p-6 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/10">
                <h3 class="text-xl font-bold text-primary dark:text-primary-light mb-2">Currently Available</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  I'm currently available for freelance projects and full-time opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-background-light dark:bg-background-dark border-t border-primary/5 dark:border-primary/10">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Top Section -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <!-- About Column -->
            <div class="space-y-4">
              <h3 class="text-xl font-bold text-primary dark:text-primary-light">Fineas</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Building exceptional digital experiences with a focus on innovation and user experience.
              </p>
              <!-- Social Links -->
              <div class="flex gap-4">
                <a href="https://github.com/yourusername" target="_blank" 
                  class="w-10 h-10 rounded-lg bg-background dark:bg-background-dark border border-primary/20 hover:border-primary/40 flex items-center justify-center transition-colors text-primary dark:text-primary-light hover:bg-primary/5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank"
                  class="w-10 h-10 rounded-lg bg-background dark:bg-background-dark border border-primary/20 hover:border-primary/40 flex items-center justify-center transition-colors text-primary dark:text-primary-light hover:bg-primary/5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="mailto:your.email@example.com"
                  class="w-10 h-10 rounded-lg bg-background dark:bg-background-dark border border-primary/20 hover:border-primary/40 flex items-center justify-center transition-colors text-primary dark:text-primary-light hover:bg-primary/5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Quick Links -->
            <div class="space-y-4">
              <h3 class="text-xl font-bold text-primary dark:text-primary-light">Quick Links</h3>
              <nav class="flex flex-col gap-2">
                <a @click="scrollToSection('about')" class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors cursor-pointer">About</a>
                <a @click="scrollToSection('projects')" class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors cursor-pointer">Projects</a>
                <a @click="scrollToSection('contact')" class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors cursor-pointer">Contact</a>
                <a href="/resume.pdf" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors">Resume</a>
              </nav>
            </div>

            <!-- Contact Info -->
            <div class="space-y-4">
              <h3 class="text-xl font-bold text-primary dark:text-primary-light">Contact</h3>
              <div class="space-y-2">
                <p class="text-gray-600 dark:text-gray-300">
                  San Francisco Bay Area, CA
                </p>
                <a href="mailto:your.email@example.com" class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                  your.email@example.com
                </a>
              </div>
              <div class="inline-flex px-4 py-2 bg-primary/5 dark:bg-primary/10 rounded-lg text-primary dark:text-primary-light text-sm">
                Available for opportunities
              </div>
            </div>
          </div>

          <!-- Bottom Section -->
          <div class="pt-8 border-t border-primary/5 dark:border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="text-gray-600 dark:text-gray-300 text-sm">
              © {{ new Date().getFullYear() }} Fineas. All rights reserved.
            </div>
            <div class="text-gray-600 dark:text-gray-300 text-sm">
              Built with 
              <a href="https://vuejs.org" target="_blank" class="text-primary dark:text-primary-light hover:underline">Vue</a>
              and
              <a href="https://tailwindcss.com" target="_blank" class="text-primary dark:text-primary-light hover:underline">Tailwind CSS</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRafFn } from '@vueuse/core'
import { TextureLoader, Texture } from 'three'

// Define interfaces
interface Rock {
  x: number
  y: number
  z: number
  rotationX: number
  rotationY: number
  rotationZ: number
  scale: number
  baseY: number
  phase: number
  rotationSpeed: number
  texture: Texture | null
}

interface Experience {
  title: string
  company: string
  date: string
  description: string
  technologies: string[]
  isVisible: boolean
}

// Create floating rocks
const rocks = ref<Rock[]>([])

// Define rune textures
const runeTextures = [
  '/images/runes/water_rune_256px.ico',
  '/images/runes/blood_rune_256px.ico',
  '/images/runes/mind_rune_256px.ico',
  '/images/runes/fire_rune_256px.ico',
  '/images/runes/law_rune_256px.ico'
]

// Define rune colors for matching rocks
const runeColors = [
  0x4444FF, // Water rune - blue
  0x990000, // Blood rune - dark red
  0x8844FF, // Mind rune - purple
  0xFF4400, // Fire rune - orange-red
  0xFFFFFF  // Law rune - white
]

let time = 0

// Initialize 3D objects on client side only
onMounted(() => {
  // Load textures first
  const textureLoader = new TextureLoader()
  const loadedTextures = runeTextures.map(path => textureLoader.load(path))

  // Initialize rocks with textures
  rocks.value = Array.from({ length: 5 }, (_, i) => ({
    x: (Math.random() - 0.5) * 8,
    y: Math.random() * 4,
    z: (Math.random() - 0.5) * 3,
    rotationX: Math.random() * Math.PI,
    rotationY: Math.random() * Math.PI,
    rotationZ: Math.random() * Math.PI,
    scale: 0.5 + Math.random() * 0.2,
    baseY: 0,
    phase: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() * 0.003) + 0.001,
    texture: loadedTextures[i]
  }))

  // Start animation
  useRafFn(() => {
    time += 0.01
    
    // Animate rocks
    rocks.value.forEach((rock) => {
      if (rock.baseY === 0) {
        rock.baseY = rock.y
      }
      
      // Floating animation with varying heights
      rock.y = rock.baseY + Math.sin(time + rock.phase) * 0.3
      
      // Smooth rotation animation
      rock.rotationX += rock.rotationSpeed
      rock.rotationY += rock.rotationSpeed
      rock.rotationZ += rock.rotationSpeed * 0.7
    })
  })
})

// Initialize experiences with default values
const experiences = ref<Experience[]>([
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovators Inc.',
    date: '2022 - Present',
    description: 'Leading the frontend development team in building modern web applications. Implementing cutting-edge technologies and best practices for optimal user experience.',
    technologies: ['Vue.js', 'TypeScript', 'TailwindCSS', 'Three.js'],
    isVisible: false
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    date: '2020 - 2022',
    description: 'Developed and maintained full-stack applications, focusing on scalable architecture and responsive design.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    isVisible: false
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Web Agency',
    date: '2018 - 2020',
    description: 'Created responsive and interactive web applications. Specialized in building custom animations and user interfaces.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'WebGL'],
    isVisible: false
  }
])

// Initialize form data with empty values
const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const formStatus = ref({
  message: '',
  type: 'success'
})

// Initialize skills with default values
const skills = [
  { name: 'Frontend Development', level: 95 },
  { name: '3D Graphics & Animation', level: 85 },
  { name: 'UI/UX Design', level: 90 },
  { name: 'Backend Development', level: 80 },
  { name: 'DevOps & Deployment', level: 75 }
]

// Initialize technologies
const technologies = [
  'JavaScript',
  'HTML',
  'CSS',
  'Web Development',
  'RESTful APIs',
  'Serverless Architecture',
  'Microservices',
  'Database Management',
  'Cloud Infrastructure',
  'Version Control'
]

const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    formStatus.value.message = ''
    
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData.value)
    
    // Show success message
    formStatus.value = {
      message: 'Message sent successfully! I\'ll get back to you soon.',
      type: 'success'
    }
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      message: ''
    }
  } catch (error) {
    formStatus.value = {
      message: 'Failed to send message. Please try again.',
      type: 'error'
    }
  } finally {
    isSubmitting.value = false
  }
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => {
  // Animate progress bars when they come into view
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target as HTMLElement
        const width = progressBar.dataset.width || '0%'
        setTimeout(() => {
          progressBar.style.width = width
        }, 200)
        progressObserver.unobserve(progressBar)
      }
    })
  }, {
    threshold: 0.5
  })

  // Observe progress bars
  document.querySelectorAll('.bg-primary\\/80').forEach(bar => {
    progressObserver.observe(bar)
  })

  // Animate timeline items
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.getAttribute('data-index') || '0')
        experiences.value[index].isVisible = true
        timelineObserver.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px'
  })

  // Observe timeline items
  document.querySelectorAll('[data-timeline-item]').forEach((item, index) => {
    item.setAttribute('data-index', index.toString())
    timelineObserver.observe(item)
  })
})
</script>

<style>
* {
  cursor: default;
}

a, button {
  cursor: pointer;
}
</style> 