'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Float, Text3D, Center } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'

function Girl() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={[-2, 0, 0]}>
        {/* Head */}
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#ffd7be" />
        </mesh>

        {/* Eyes */}
        <mesh position={[-0.15, 1.6, 0.4]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#000" />
        </mesh>
        <mesh position={[0.15, 1.6, 0.4]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#000" />
        </mesh>

        {/* Smile */}
        <mesh position={[0, 1.35, 0.45]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.15, 0.03, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#ff69b4" />
        </mesh>

        {/* Hair */}
        <mesh position={[0, 1.7, -0.1]}>
          <sphereGeometry args={[0.55, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.5]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>

        {/* Body */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.3, 0.35, 1, 32]} />
          <meshStandardMaterial color="#ffb6c1" />
        </mesh>

        {/* The First Pimple! */}
        <mesh position={[0.25, 1.5, 0.45]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ff6b6b" emissive="#ff0000" emissiveIntensity={0.3} />
        </mesh>
      </group>
    </Float>
  )
}

function HomeRemedies() {
  return (
    <group position={[2, 0, 0]}>
      {/* Honey Jar */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[0, 1, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.6, 32]} />
          <meshStandardMaterial color="#FFD700" transparent opacity={0.7} />
        </mesh>
        <mesh position={[0, 1.35, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
      </Float>

      {/* Aloe Vera Leaf */}
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[0.8, 0.5, 0]} rotation={[0, 0, Math.PI / 6]}>
          <boxGeometry args={[0.2, 0.8, 0.1]} />
          <meshStandardMaterial color="#90EE90" />
        </mesh>
      </Float>

      {/* Tea Tree Oil Bottle */}
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.7}>
        <mesh position={[-0.8, 0.8, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.5, 32]} />
          <meshStandardMaterial color="#2F4F2F" />
        </mesh>
      </Float>
    </group>
  )
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffb6c1" />
      <spotLight position={[0, 5, 0]} angle={0.3} penumbra={1} intensity={1} color="#fff" />
    </>
  )
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
      <Suspense fallback={null}>
        <Lighting />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Girl />
        <HomeRemedies />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 4} />
      </Suspense>
    </Canvas>
  )
}
