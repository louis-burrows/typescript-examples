// not all types have to be required

type updateStatus = (status: string, fireSideEffect?: boolean) => string;

const updateStatus: updateStatus = (status, fireSideEffect) => {
  // action to update status..
  // updateStatus(status)

  // fire side effect based off the second argument
  // => 'undefined' or 'false' will mean it's not fired
  if (fireSideEffect) {
    // someOtherSideEffect()
  }

  return status
}

// second example

type updateUser = (user: unknown, sideEffect?: () => void) => unknown;

const updateUser: updateUser = (user, sideEffect) => {
  // action to update user..
  // updateUser(user)

  // fire side effect based off the second argument
  // => we need to check that it's defined before calling it
  if (sideEffect) {
    sideEffect()
  }

  return user
}

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
