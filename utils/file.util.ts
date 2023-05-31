import * as fs from "fs-extra";
import * as path from 'path';

const projectPath = path.resolve(__dirname).split("utils")[0]; 
const otherResults = path.join(projectPath, "other-results"); 
const allureReport = path.join(projectPath, "allure-report"); 
const allureResult = path.join(projectPath, "allure-results"); 
const testResults = path.join(projectPath, "test-results"); 
const subfolder = "history"; 

export async function RemoveFolders() {


  if (await fs.pathExists(allureResult)) {
    await fs.remove(allureResult);
  }
  await fs.ensureDir(allureResult);
  if (await fs.pathExists(`${allureReport}/${subfolder}`)) {

  await fs.copy(`${allureReport}/${subfolder}`, `${allureResult}/${subfolder}`);}
  if (await fs.pathExists(allureReport)) {
    await fs.remove(allureReport);
  }
  if (await fs.pathExists(testResults)) {
    await fs.remove(testResults);
  }

  console.log(`RemovedFolders - ${allureReport},${allureResult}`);
}
