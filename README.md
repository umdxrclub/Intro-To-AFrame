# Introduction to A-Frame

## Overview

This set of A-Frame scenes is meant to introduce A-Frame in a hands-on fashion.

## First Scene

The first scene is a simple example meant to introduce the basic nature of A-Frame.

The file index.html defines the webpage A-Frame will run in. It is a typical HTML file but with A-Frame included as a script in the head. In the body of the HTML file there is an A-Frame scene defined, and also some entities. The entities have components on them like position, and rotation. You can open this file with a browser to see the A-Frame scene.

The file rigidbody.js defines a component with JavaScript. The rigidbody component defined in this file is a simple component meant to allow an object to have velocity. It has two schema:
* velocity, of type vec3
* dampenVelocity, of type boolean

Since rigidbody.js is included as a script in the head of index.html, rigidbody will be registered as a component, so we can add the component to any of our entities. For example, `<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>` becomes `<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" rigidbody="velocity: 0 10 0"></a-box>`, and now the box will start with a velocity of (0, 10, 0), so it will be pushed straight up.

## Airplane Scene

The goal of the airplane scene is to implement the airplane component to allow the user to fly around the scene. In this scene airplane.js is just a skeleton. We will add some code to make the component behave the way that we want.

## Airplane Scene Complete

If you want to see what I am going for with the airplane scene, take a look at this scene.

## AR Scene

I've thrown this scene in here just to demonstrate the A-Frame has some AR capabilities. Ideally it should be opened on a phone, and the phone's camera should be pointed at [this logo](https://raw.githubusercontent.com/jeromeetienne/AR.js/master/data/images/HIRO.jpg).