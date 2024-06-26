function Navbar() {
  return (
    <div className="flex justify-around p-5 items-center">
      <div>
        <h1 className="font-bold text-3xl">Umer Shaikh</h1>
      </div>

      <div className="flex gap-10">
        <p className="cursor-pointer text-xl">Skills</p>
        <p className="cursor-pointer text-xl">Projects</p>
        <p className="cursor-pointer text-xl">Contact</p>
      </div>
    </div>
  );
}

export default Navbar;
