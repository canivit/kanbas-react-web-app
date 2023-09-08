{
  description = "a1";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/master";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }: flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = import nixpkgs { inherit system; };
    in
    {
      devShell = pkgs.mkShell {
        name = "a1";
        buildInputs = with pkgs; [
          nodejs_18
        ];
        shellHook = ''
          export PATH=$PWD/src/frontend/node_modules/.bin:$PATH
        '';
      };
    });
}
