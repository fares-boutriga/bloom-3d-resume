
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Scene3DProps {
  className?: string;
}

const Scene3D = ({ className = '' }: Scene3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const torusRef = useRef<THREE.Mesh | null>(null);
  const icosahedronRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x9f7aea, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xf87171, 1);
    pointLight.position.set(-1, -1, 2);
    scene.add(pointLight);

    // Torus
    const torusGeometry = new THREE.TorusGeometry(1.2, 0.3, 16, 100);
    const torusMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x9f7aea,
      shininess: 100,
      specular: 0xffffff
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);
    torusRef.current = torus;
    
    // Icosahedron
    const icosahedronGeometry = new THREE.IcosahedronGeometry(0.6, 0);
    const icosahedronMaterial = new THREE.MeshPhysicalMaterial({ 
      color: 0xf87171,
      metalness: 0.5,
      roughness: 0.2,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2
    });
    const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
    scene.add(icosahedron);
    icosahedronRef.current = icosahedron;

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    
    const posArray = new Float32Array(particleCount * 3);
    for(let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (torusRef.current) {
        torusRef.current.rotation.x += 0.005;
        torusRef.current.rotation.y += 0.005;
      }
      
      if (icosahedronRef.current) {
        icosahedronRef.current.rotation.x += 0.008;
        icosahedronRef.current.rotation.y += 0.008;
      }
      
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0005;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Mouse effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!icosahedronRef.current || !containerRef.current) return;
      
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      icosahedronRef.current.position.x = x * 0.5;
      icosahedronRef.current.position.y = y * 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose geometries and materials
      torusGeometry.dispose();
      torusMaterial.dispose();
      icosahedronGeometry.dispose();
      icosahedronMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className={`w-full h-full ${className}`}></div>;
};

export default Scene3D;
