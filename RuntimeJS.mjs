const RuntimeJS = {
  try_catch(computation, onError) {
    try { return computation() }
    catch (error) { return onError(error) }
  },
  import_module(specifier) {
    return import(specifier);
  }
}

export default RuntimeJS;

