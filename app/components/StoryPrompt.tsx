'use client'

import { motion } from 'framer-motion'

interface StoryPromptProps {
  onClose: () => void
}

export default function StoryPrompt({ onClose }: StoryPromptProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        zIndex: 1000,
        pointerEvents: 'auto'
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          borderRadius: '20px',
          padding: '2.5rem',
          maxWidth: '800px',
          maxHeight: '80vh',
          overflowY: 'auto',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
      >
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#ff69b4',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          🎬 3D Animation Prompt: "The First Pimple"
        </h2>

        <div style={{ lineHeight: '1.8', color: '#333', fontSize: '1rem' }}>
          <section style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#ff1493', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              📖 Story Synopsis
            </h3>
            <p>
              A heartwarming 3D animated short film about Emma, a sweet 13-year-old girl who discovers
              her very first pimple. Follow her emotional journey from shock and worry to self-acceptance
              and natural healing, learning that true beauty comes from within and that small imperfections
              are a natural part of growing up.
            </p>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#ff1493', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              🎭 Scene Breakdown
            </h3>

            <div style={{ marginLeft: '1rem' }}>
              <h4 style={{ color: '#ff69b4', marginTop: '1rem', fontWeight: 'bold' }}>Scene 1: The Discovery (0:00-0:30)</h4>
              <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Morning light streams through Emma's pastel pink bedroom</li>
                <li>She approaches her mirror with a bright smile, ready for school</li>
                <li>Close-up: Her eyes widen as she spots a tiny red bump on her right cheek</li>
                <li>Dramatic zoom-in on the pimple, background dims</li>
                <li>Emma's expression shifts from cheerful to shocked</li>
              </ul>

              <h4 style={{ color: '#ff69b4', marginTop: '1rem', fontWeight: 'bold' }}>Scene 2: The Worry (0:30-1:00)</h4>
              <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Emma touches her cheek gently, looking concerned</li>
                <li>Thought bubbles appear showing her worries about school</li>
                <li>She tries to cover it with her hand, experimenting with different angles</li>
                <li>Her mom notices and gives her a warm, understanding hug</li>
              </ul>

              <h4 style={{ color: '#ff69b4', marginTop: '1rem', fontWeight: 'bold' }}>Scene 3: The Natural Remedy Journey (1:00-2:30)</h4>
              <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Mom leads Emma to the kitchen - a magical transformation sequence</li>
                <li>The kitchen becomes a whimsical natural healing workshop</li>
                <li><strong>Remedy 1 - Honey Magic:</strong> Golden honey drips into a bowl, sparkling with natural healing properties. Mom explains honey's antibacterial benefits.</li>
                <li><strong>Remedy 2 - Aloe Vera Soothing:</strong> Fresh aloe leaf is cut, revealing cooling gel. Animated sparkles show its soothing power.</li>
                <li><strong>Remedy 3 - Tea Tree Oil:</strong> Tiny drops of essential oil glow with purifying energy</li>
                <li><strong>Remedy 4 - Cucumber Calm:</strong> Cool cucumber slices appear, creating a spa-like moment</li>
                <li>Emma applies honey gently to her pimple with a cotton swab</li>
                <li>Magical animation: The honey glows softly on her skin</li>
              </ul>

              <h4 style={{ color: '#ff69b4', marginTop: '1rem', fontWeight: 'bold' }}>Scene 4: The Healing (2:30-3:00)</h4>
              <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Time-lapse sequence: Day turns to night, night to day</li>
                <li>Emma maintains her gentle skincare routine</li>
                <li>She drinks water (animated water drops refresh her skin)</li>
                <li>Gets good sleep (peaceful dream clouds surround her)</li>
                <li>The pimple gradually reduces in size and redness</li>
              </ul>

              <h4 style={{ color: '#ff69b4', marginTop: '1rem', fontWeight: 'bold' }}>Scene 5: The Transformation (3:00-3:30)</h4>
              <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Three days later, Emma looks in the mirror</li>
                <li>The pimple has significantly healed</li>
                <li>Her smile returns, even brighter than before</li>
                <li>She realizes she's still the same sweet girl, pimple or no pimple</li>
                <li>Mirror reflection shows her inner beauty radiating outward</li>
              </ul>

              <h4 style={{ color: '#ff69b4', marginTop: '1rem', fontWeight: 'bold' }}>Scene 6: The Message (3:30-4:00)</h4>
              <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Emma walks to school confidently</li>
                <li>She helps a friend who's also worried about a blemish</li>
                <li>Shares her natural remedy knowledge with kindness</li>
                <li>Final message appears: "True beauty glows from within 🌸"</li>
                <li>Credits roll over animated natural remedy icons</li>
              </ul>
            </div>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#ff1493', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              🎨 Visual Style
            </h3>
            <ul style={{ marginLeft: '1.5rem' }}>
              <li><strong>Character Design:</strong> Soft, rounded features with expressive eyes. Emma has warm skin tone, flowing brown hair, and wears comfortable, modest clothing</li>
              <li><strong>Color Palette:</strong> Pastel pinks, soft greens, warm golds, and calming blues</li>
              <li><strong>Lighting:</strong> Warm, natural lighting that creates a safe, comforting atmosphere</li>
              <li><strong>Animation Style:</strong> Pixar-inspired 3D with smooth movements and exaggerated facial expressions for emotional impact</li>
              <li><strong>Special Effects:</strong> Gentle sparkles for natural remedies, soft glows for healing moments</li>
            </ul>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#ff1493', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              🌿 Home Remedies Featured
            </h3>
            <div style={{ background: '#fff8f0', padding: '1rem', borderRadius: '10px', marginTop: '0.5rem' }}>
              <ol style={{ marginLeft: '1.5rem', lineHeight: '2' }}>
                <li><strong>Raw Honey:</strong> Natural antibacterial properties, apply directly for 10-15 minutes</li>
                <li><strong>Aloe Vera Gel:</strong> Soothes inflammation and promotes healing</li>
                <li><strong>Tea Tree Oil:</strong> Diluted with carrier oil, targets bacteria (use sparingly)</li>
                <li><strong>Cucumber Slices:</strong> Reduces redness and cools the skin</li>
                <li><strong>Proper Cleansing:</strong> Gentle face washing twice daily with mild soap</li>
                <li><strong>Hydration:</strong> Drinking plenty of water for healthy skin</li>
                <li><strong>Don't Touch/Pick:</strong> Important reminder to let skin heal naturally</li>
              </ol>
            </div>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#ff1493', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              💝 Core Messages
            </h3>
            <ul style={{ marginLeft: '1.5rem' }}>
              <li>Getting pimples is a normal part of growing up</li>
              <li>Natural remedies can be gentle and effective</li>
              <li>Self-acceptance and patience are important</li>
              <li>True beauty comes from kindness and confidence</li>
              <li>It's okay to ask for help from parents/trusted adults</li>
            </ul>
          </section>

          <section>
            <h3 style={{ fontSize: '1.3rem', color: '#ff1493', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              🎵 Audio Suggestions
            </h3>
            <ul style={{ marginLeft: '1.5rem' }}>
              <li><strong>Music:</strong> Gentle, uplifting orchestral score with soft piano and strings</li>
              <li><strong>Sound Effects:</strong> Magical chimes for remedy applications, soft whooshes for time-lapse</li>
              <li><strong>Voice:</strong> Warm, friendly narration or dialogue that feels supportive and educational</li>
            </ul>
          </section>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          style={{
            marginTop: '2rem',
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: 'white',
            background: 'linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            width: '100%',
            boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)'
          }}
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
