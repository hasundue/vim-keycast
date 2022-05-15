import { test } from "./denocy.vim/mod.ts";

test("test", { target: "all" }, (vim) => {
  vim.edit("./README.md");
  vim.cmd("KeycastyEnable");
  vim.moveTo("keycasty");
  vim.popup.should.exist();
  vim.popup.should.include("11w");
  vim.popup.should.onlyInclude("11w");
});
