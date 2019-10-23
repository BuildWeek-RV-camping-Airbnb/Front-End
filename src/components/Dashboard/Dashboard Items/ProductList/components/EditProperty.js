import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import Logo from '../../../../../assets/Logo';

const initialProperty = {
  property_name: '',
  description: '',
  address: '',
  city: '',
  state: '',
  image: '',
  price: '',
  rating: ''
};

const EditProperty = ({ properties, updateProperties }) => {
  const [editing, setEditing] = useState(false);
  const [propertyToEdit, setPropertyToEdit] = useState(initialProperty);

  const editProperty = property => {
    setEditing(true);
    setPropertyToEdit(property);
  };

  return (
    <>
      <h1>Property</h1>
      {properties.map(recipe => (
        <li onClick={() => editProperty(property)}>
          <div>
            <div className="delete" onClick={() => deleteRecipe}>
              X
            </div>
          </div>
        </li>
      ))}
      {editing && (
        <div>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <div>
                <Logo />
              </div>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="property_name"
                      variant="outlined"
                      fullWidth
                      id="property_name"
                      label="Property Name"
                      autoFocus
                      InputProps={{
                        classes: {
                          outlined: classes.outlined,
                          focused: classes.focused
                        }
                      }}
                      value={propertyToEdit.title}
                      required
                      onChange={e =>
                        setPropertyToEdit({
                          ...propertyToEdit,
                          property: e.target.value
                        })
                      }
                    />
                  </Grid>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <Select
                      name="meal_type"
                      label="Meal Type"
                      id="meal_type"
                      value={recipeToEdit.meal_type}
                      onChange={e =>
                        setRecipeToEdit({
                          ...recipeToEdit,
                          recipe: e.target.value
                        })
                      }
                      labelWidth={labelWidth}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Breakfast">Breakfast</MenuItem>
                      <MenuItem value="Lunch">Lunch</MenuItem>
                      <MenuItem value="Dinner">Dinner</MenuItem>
                    </Select>
                  </FormControl>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="description"
                      variant="outlined"
                      fullWidth
                      id="description"
                      label="Short Description"
                      value={recipeToEdit.description}
                      required
                      onChange={e =>
                        setRecipeToEdit({
                          ...recipeToEdit,
                          recipe: e.target.value
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="instructions"
                      variant="outlined"
                      fullWidth
                      id="instructions"
                      label="Recipe Prepare Instructions"
                      value={recipeToEdit.instructions}
                      required
                      onChange={e =>
                        setRecipeToEdit({
                          ...recipeToEdit,
                          recipe: e.target.value
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="pic_url"
                      variant="outlined"
                      fullWidth
                      id="pic_url"
                      label="Photo"
                      autoFocus
                      InputProps={{
                        classes: {
                          outlined: classes.outlined,
                          focused: classes.focused
                        }
                      }}
                      value={recipeToEdit.pic_url}
                      required
                      onChange={e =>
                        setRecipeToEdit({
                          ...recipeToEdit,
                          recipe: e.target.value
                        })
                      }
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onChange={handleChanges}
                  onClick={() => setEditing(false)}
                >
                  Edit Recipe
                </Button>
              </form>
            </div>
          </Container>

          <form onSubmit={saveEdit}>
            <h1>Edit Recipe</h1>
            <label>
              Title:
              <input
                onChange={e =>
                  setRecipeToEdit({ ...recipeToEdit, recipe: e.target.value })
                }
                value={recipeToEdit.title}
              />
            </label>
            <label>
              Description:
              <input
                onChange={e =>
                  setRecipeToEdit({ ...recipeToEdit, recipe: e.target.value })
                }
                value={recipeToEdit.description}
              />
            </label>
            <label>
              Instructions:
              <input
                onChange={e =>
                  setRecipeToEdit({ ...recipeToEdit, recipe: e.target.value })
                }
                value={recipeToEdit.instructions}
              />
            </label>
            <label>
              Meal Type:
              <input
                onChange={e =>
                  setRecipeToEdit({ ...recipeToEdit, recipe: e.target.value })
                }
                value={recipeToEdit.meal_type}
              />
            </label>
            <label>
              Avatar:
              <input
                onChange={e =>
                  setRecipeToEdit({ ...recipeToEdit, recipe: e.target.value })
                }
                value={recipeToEdit.pic_url}
              />
            </label>

            <button type="submit">Save</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
          </form>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
    return {
      properties: state.properties,
      isFetching: state.isFetching,
      isPosting: state.isPosting,
      isUpdating: state.isUpdating,
      isDeleting: state.isDeleting,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    {
      editProperty,
      deleteProperty
    }
  )(EditProperty);
