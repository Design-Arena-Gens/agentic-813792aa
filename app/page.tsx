'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Scene3D from './components/Scene3D'
import StoryPrompt from './components/StoryPrompt'

export default function Home() {
  const [showPrompt, setShowPrompt] = useState(false)

  return (
    <main style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Scene3D />

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 10
      }}>
        <div style={{
          position: 'absolute',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          pointerEvents: 'auto'
        }}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#ff69b4',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              marginBottom: '1rem'
            }}
          >
            The First Pimple 🌸
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: '1.1rem',
              color: '#666',
              marginBottom: '1.5rem'
            }}
          >
            A Sweet Story of Natural Healing
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPrompt(!showPrompt)}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: 'white',
              background: 'linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)'
            }}
          >
            {showPrompt ? 'Hide Story Prompt' : 'View Full Animation Prompt'}
          </motion.button>
        </div>

        <AnimatePresence>
          {showPrompt && (
            <StoryPrompt onClose={() => setShowPrompt(false)} />
          )}
        </AnimatePresence>

        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          pointerEvents: 'auto'
        }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '1rem 2rem',
              borderRadius: '15px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
          >
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              🌿 Natural remedies • Home care • Self-love journey
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
