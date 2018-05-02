import React, { Component } from 'react';

return (
  <section>
    <h1></h1>
    <h3></h3>
    <p>{this.state.A || ""}</p>
    <h3></h3>
    <p>
      {(() => {
        switch (this.state.A) {
          case A === 10|| A === 9 || A === 8 : return "Dark Cool";
          case A === 7 || A === 6 : return "Bright Cool";
          case A === 5:  return "Nutral";
          case A === 4 || A === 3 : return "Soft Warm";
          case A === 2 || A === 1 : return "Light Warm";
        }
      })()}
    </p>
  </section>
);