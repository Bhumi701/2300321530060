export async function Log(stack: string, level: string, pkg: string, message: string){
  const logData = { stack, level, package: pkg, message};

  try {
    await new Promise( resolve => setTimeout(resolve, 300));
    console.log(`${level}] ${pkg} (${stack}): ${message}`);
  } catch (error) {
    console.error('Logging failed:', error);
  }
}