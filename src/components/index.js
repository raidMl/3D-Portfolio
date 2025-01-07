import React from 'react';
import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Tech from './Tech';
import Experience from './Experience';
import Works from './Works';
import Feedbacks from './Feedbacks';
import Contact from './Contact';

//use lazy loading
//  const Hero = React.lazy(() => import('./Hero'))
//   const Navbar = React.lazy(() => import('./Navbar'))
//   const About = React.lazy(() => import('./About'))
//   const Tech = React.lazy(() => import('./Tech'))
//   const Experience = React.lazy(() => import('./Experience'))
//   const Works = React.lazy(() => import('./Works'))
//   const Feedbacks = React.lazy(() => import('./Feedbacks'))
//   const Contact = React.lazy(() => import('./Contact'))

export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas
}