{ pkgs }:
{
  deps = [
    pkgs.nodejs_20
    pkgs.sqlite
    pkgs.openssl
    pkgs.git
  ];
}
